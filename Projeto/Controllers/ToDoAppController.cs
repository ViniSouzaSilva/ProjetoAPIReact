using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Projeto.MODEL.IA;
using System.Data;
using System.Data.SqlClient;
using System.Net.Http.Headers;


namespace Projeto.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ToDoAppController : ControllerBase
    {
        private IConfiguration _configuration;

        public ToDoAppController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        [Route("GetNotes")]
        public JsonResult GetNotes()
        {
            string query = "Select * from notes";
            DataTable dataTable = new DataTable();
            SqlDataReader myReader;
            string sqlDataSource = _configuration.GetConnectionString("todoAppDBCon");

            using (SqlConnection mycon = new SqlConnection(sqlDataSource))
            {
                try
                {
                    mycon.Open();
                    using (SqlCommand myCommand = new SqlCommand(query, mycon))
                    {
                        myReader = myCommand.ExecuteReader();
                        dataTable.Load(myReader);
                        myReader.Close();


                    }
                }
                catch (Exception ex)
                {
                    throw new Exception();
                }
                finally 
                {

                   
                    mycon.Close();
                }
            }
            return new JsonResult(dataTable);
        }


        [HttpPost]
        [Route("AddNotes")]
        public JsonResult AddNotes(string newNotes)
        {
            string query = "Insert Into notes values(@newnotes)";
            DataTable dataTable = new DataTable();
            SqlDataReader myReader;
            string sqlDataSource = _configuration.GetConnectionString("todoAppDBCon");

            using (SqlConnection mycon = new SqlConnection(sqlDataSource))
            {
                mycon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, mycon))
                {
                    myCommand.Parameters.AddWithValue("@newNotes", newNotes);
                    myReader = myCommand.ExecuteReader();
                    dataTable.Load(myReader);
                    myReader.Close();
                    mycon.Close();

                }

            }
            return new JsonResult("Add com sucesso");
        }


        [HttpPost]
        [Route("IA")]
        public JsonResult IA(string newNotes)
        {
            using (var Cliente = new HttpClient())
            {
                var Requisicao = new HttpRequestMessage(HttpMethod.Post, "https://api.gemini.com/v1/chat");
                Requisicao.Headers.Authorization = new AuthenticationHeaderValue("Bearer", "AIzaSyCRmgAvyfuSSA334BjUtpcl_jcj7PCDElQ");
                var content = new StringContent(JsonConvert.SerializeObject(new { newNotes }));
                content.Headers.ContentType = new MediaTypeHeaderValue("application/json");
                Requisicao.Content = content;

                var response = Cliente.SendAsync(Requisicao);
                var responseString = response.ToString();
                var responseObject = JsonConvert.DeserializeObject<GeminiResponse>(responseString);

               
                return new JsonResult(responseObject.Response);
            }
            



           



        }


        [HttpDelete]
        [Route("DeleteNotes")]
        public JsonResult DeleteNotes(int @Id)
        {
            string query = "Delete from Notes where Id = @Id";
            DataTable dataTable = new DataTable();
            SqlDataReader myReader;
            string sqlDataSource = _configuration.GetConnectionString("todoAppDBCon");

            using (SqlConnection mycon = new SqlConnection(sqlDataSource))
            {
                mycon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, mycon))
                {
                    myCommand.Parameters.AddWithValue("@Id", Id);
                    myReader = myCommand.ExecuteReader();
                    dataTable.Load(myReader);
                    myReader.Close();
                    mycon.Close();

                }

            }
            return new JsonResult("Del com sucesso");
        }


        [HttpPut]
        [Route("UpdateNotes")]
        public JsonResult UpdateNotes(int @Id,string @description)
        {
            
            
            string query = "Update Notes set description = @description where Id = @Id";
            DataTable dataTable = new DataTable();
            SqlDataReader myReader;
            string sqlDataSource = _configuration.GetConnectionString("todoAppDBCon");

            using (SqlConnection mycon = new SqlConnection(sqlDataSource))
            {
                mycon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, mycon))
                {
                    myCommand.Parameters.AddWithValue("@Id", Id);
                    myCommand.Parameters.AddWithValue("@description", description);
                    myReader = myCommand.ExecuteReader();
                    dataTable.Load(myReader);
                    myReader.Close();
                    mycon.Close();

                }

            }
            return new JsonResult("Del com sucesso");
        }
    }
}

