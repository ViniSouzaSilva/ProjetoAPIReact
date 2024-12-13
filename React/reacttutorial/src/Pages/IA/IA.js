import React, { useState, useEffect } from 'react';

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
      const prompt = promptDigitado;
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
      {response ? <p>{response}</p> : <p>Carregando...</p>} 

      <input 
        type="text" 
        value={promptDigitado} 
        onChange={handleInputChange} 
        placeholder="Digite algo"
      />
      <button onClick={fetchData}>Buscar</button>
    </div>
  );
}

export default IA;