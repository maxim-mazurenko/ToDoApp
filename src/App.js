import React from 'react';
import './App.css';
import ToDo from './components/todo-list/todo-list';
import TodoAddForm from './components/todo-add-form/todo-add-fotm';

const items = [
  { name: 'Сходить в спортзал', done: false },
  { name: 'Искупать кота', done: false },
];

function App() {
  const [data, setData] = React.useState(items);

  const addItemData = (name) => {
    if (name === '') return;
    const item = { name: name, done: false };
    setData([...data, item]);
  };

  const toggleDone = (index) => {
    const newData = data.map((item, i) => {
      if (index === i) {
        item.done = !item.done;
      }
      return item;
    });

    setData(newData);
  };

  return (
    <div className="App">
      <h1 className="App__header">Todos</h1>
      <ToDo toggleDone={toggleDone} data={data} />
      <TodoAddForm addItemData={addItemData} />
    </div>
  );
}

export default App;
