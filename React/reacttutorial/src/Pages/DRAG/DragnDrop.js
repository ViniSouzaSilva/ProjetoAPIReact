import React, { useState } from 'react';

import 'rsuite/dist/rsuite.min.css';

// Função para mover um item de uma lista para outra ou dentro da mesma lista
const moveTask = (sourceListIndex, destinationListIndex, sourceTaskIndex, destinationTaskIndex, lists) => {
  const updatedLists = [...lists];
  const [movedTask] = updatedLists[sourceListIndex].tasks.splice(sourceTaskIndex, 1);

  if (sourceListIndex === destinationListIndex) {
    updatedLists[destinationListIndex].tasks.splice(destinationTaskIndex, 0, movedTask);
  } else {
    updatedLists[destinationListIndex].tasks.splice(destinationTaskIndex, 0, movedTask);
  }

  return updatedLists;
};

const DragnDrop = () => {
  const [lists, setLists] = useState([
    {
      id: 1,
      title: 'To Do',
      tasks: [
        { id: 1, text: 'Task 1' },
        { id: 2, text: 'Task 2' },
        { id: 3, text: 'Task 3' },
      ],
    },
    {
      id: 2,
      title: 'In Progress',
      tasks: [
        { id: 4, text: 'Task 4' },
        { id: 5, text: 'Task 5' },
      ],
    },
    {
      id: 3,
      title: 'Done',
      tasks: [
        { id: 6, text: 'Task 6' },
      ],
    },
  ]);

  const handleDragStart = (e, sourceListIndex, sourceTaskIndex) => {
    e.dataTransfer.setData('sourceListIndex', sourceListIndex);
    e.dataTransfer.setData('sourceTaskIndex', sourceTaskIndex);
  };

  const handleDrop = (e, destinationListIndex, destinationTaskIndex) => {
    const sourceListIndex = e.dataTransfer.getData('sourceListIndex');
    const sourceTaskIndex = e.dataTransfer.getData('sourceTaskIndex');

    // Atualiza o estado com a nova ordem de tarefas após o "drop"
    const updatedLists = moveTask(
      sourceListIndex,
      destinationListIndex,
      sourceTaskIndex,
      destinationTaskIndex,
      lists
    );

    setLists(updatedLists);
  };

  const handleDragOver = (e) => {
    e.preventDefault(); // Necessário para permitir o "drop"
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      {lists.map((list, listIndex) => (
        <div
          key={list.id}
          style={{
            width: '30%',
            padding: '10px',
            backgroundColor: '#f4f5f7',
            borderRadius: '5px',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
          }}
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, listIndex, list.tasks.length)}
        >
          <h3>{list.title}</h3>
          <div>
            {list.tasks.map((task, taskIndex) => (
              <div
                key={task.id}
                draggable
                onDragStart={(e) => handleDragStart(e, listIndex, taskIndex)}
                style={{
                  marginBottom: '10px',
                  padding: '10px',
                  backgroundColor: '#fff',
                  borderRadius: '5px',
                  cursor: 'move',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                }}
                onDrop={(e) => handleDrop(e, listIndex, taskIndex)}
              >
                {task.text}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DragnDrop;
