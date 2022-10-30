import React from 'react';
import './todo-add-form.css';

const TodoAddForm = ({ addItemData }) => {
  const [inputValue, setInputValue] = React.useState('');

  return (
    <div className="todo__form">
      <div className="input-group mb-3 todo__form-input">
        <input
          type="text"
          className="form-control"
          placeholder="Что вы хотите сделать?"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          onClick={() => {
            addItemData(inputValue);
            setInputValue('');
          }}
          className="btn btn-outline-secondary todo__form-btn"
          type="button"
          id="button-addon2">
          Добавить
        </button>
      </div>
    </div>
  );
};

export default TodoAddForm;
