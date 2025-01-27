import React, { useState, useEffect } from 'react';
import { Input,Card, Text,Button, VStack, TagGroup, Tag } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
function IA() {
  const [response, setResponse] = useState(null);
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const [promptDigitado, setInputValue] = useState('');

  //const promptDigitado = "";

  const fetchData = async () => {
    try {
      const { GoogleGenerativeAI } = require("@google/generative-ai");
      const genAI = new GoogleGenerativeAI("AIzaSyCRmgAvyfuSSA334BjUtpcl_jcj7PCDElQ"); 
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const prompt = promptDigitado + "seja bem amigável e descontraído na resposta e limite a resposta em 900 caracteres";
      const result = await model.generateContent(prompt);
      setResponse(result.response.text()); 
    } catch (error) {
      console.error("Error fetching data:", error);
      setResponse("Erro ao gerar resposta."); 
    }
  };

  useEffect(() => {
   

    fetchData();
  }, []);

  return (
    <div>
      

      
     


      <Card width={500} shaded direction="row">
      <img
        src="https://images.unsplash.com/photo-1576606539605-b2a44fa58467?q=80&w=1974&auto=format&fit=crop"
        alt="Shadow"
        width={200}
        style={{ objectFit: 'cover' }}
      />
      <VStack spacing={2}>
        <Card.Header as="h5">Cream</Card.Header>
        <Card.Body>
        {response ? <p>{response}</p> : <p>Carregando...</p>} 
        </Card.Body>
        <Card.Footer>
          <TagGroup>
            <Tag size="sm"></Tag>
            <Tag size="sm"></Tag>
            <Tag size="sm"></Tag>
          </TagGroup>
        </Card.Footer>
      </VStack>
    </Card>
    <input 
        type="text" 
        value={promptDigitado } 
        onChange={handleInputChange} 
        placeholder="Digite algo"
      />
    <Button onClick={fetchData}>Buscar</Button>
    </div>
  );
}

export default IA;