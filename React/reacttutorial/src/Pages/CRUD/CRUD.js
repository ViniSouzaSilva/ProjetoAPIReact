//import React from "react";
import React, { useState, useEffect } from 'react';     

function CRUD (){

    const [data, setData] = useState('');
    const [loading, setLoading] = useState(true); // Estado para rastrear o carregamento
    const [error, setError] = useState(null); // Estado para rastrear erros
    const [inputValue, setInputValue] = useState('');

    const [notes, setNotes] = useState([]);
    const [editNote, setEditNote] = useState(null); // Estado para a nota que está sendo editada
    const [newText, setNewText] = useState(''); // Texto atualizado da nota

    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };


    
  //#region HTTP POST for addNotes


    const handleSubmit = async () => {
      try {
        const response = await fetch('http://localhost:35755/api/todoapp/addnotes?newNotes='+ inputValue,  {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
            body: JSON.stringify({ newNotes : inputValue }),
            
        });
  
        if (response.ok) {
          alert('Dados salvos com sucesso!');
          setInputValue(''); // Limpa o campo após o envio
          fetchNotes();
        } else {
          alert('Erro ao salvar os dados.');
        }
      } catch (error) {
        console.error('Erro:', error);
        alert('Erro na requisição.');
      }

    }
//#endregion
    


useEffect(() => {
  fetchNotes();
}, []);

const fetchNotes = () => {
  fetch('http://localhost:35755/api/todoapp/getnotes')
  .then(response => response.json())
  .then(data => setNotes(data))
  .catch(error => console.error('Erro ao carregar notas:', error));
};


// Função para deletar uma nota
const handleDelete = async (id) => {
  const confirmDelete = window.confirm('Tem certeza que deseja deletar esta nota?');

  if (confirmDelete) {
    try {
      const response = await fetch(`http://localhost:35755/api/ToDoApp/DeleteNotes?Id=${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        alert('Nota deletada com sucesso!');
        setNotes(notes.filter(note => note.id !== id));
        fetchNotes();
      } else {
        const errorData = await response.json();
        console.error('Erro na resposta da API:', errorData);
        alert(`Erro ao deletar a nota: ${errorData.message || 'Erro desconhecido'}`);
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
      alert('Erro na requisição.');
    }
  }
};

// Função para iniciar a edição de uma nota
const handleEdit = (note) => {
  setEditNote(note.Id);
  setNewText(note.description); // Preenche o campo com o texto atual da nota
};

// Função para salvar a nota editada
const handleSave = async (Id,description) => {
  try {
    const response = await fetch(`http://localhost:35755/api/ToDoApp/UpdateNotes?Id=${Id}&description=`+newText, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ description: newText }), // Envia o texto atualizado
    });

    if (response.ok) {
      alert('Nota atualizada com sucesso!');
      setNotes(notes.map(note => note.Id === Id ? { ...note, description: newText } : note));
      setEditNote(null); // Sai do modo de edição
      fetchNotes();
    } else {
      const errorData = await response.json();
      console.error('Erro na resposta da API:', errorData);
      alert(`Erro ao atualizar a nota: ${errorData.message || 'Erro desconhecido'}`);
    }
  } catch (error) {
    console.error('Erro na requisição:', error);
    alert('Erro na requisição.');
  }
}
  
    console.log(data);
        return(
          <div className="App">
      <h2>Bucket List</h2>
      <div>
      <h1>Minhas Notas</h1>
      <ul>
        {notes.map(note => (
          <li key={note.Id}>
            {editNote === note.Id ? (
              // Campo de entrada para editar a nota
              <input
                type="text"
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
              />
            ) : (
              <span>{note.description}</span>
            )}

            {editNote === note.Id ? (
              // Botão para salvar a nota editada
              <button onClick={() => handleSave(note.Id,note.description)}>Salvar</button>
            ) : (
              <>
                <button onClick={() => handleEdit(note)}>Editar</button>
                <button onClick={() => handleDelete(note.Id)}>Deletar</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>

      <div>
      <input 
        type="text" 
        value={inputValue} 
        onChange={handleInputChange} 
        placeholder="Digite algo"
      />
      <button onClick={handleSubmit}>Salvar</button>
    </div>

    </div>

        );
    


};

export default CRUD;