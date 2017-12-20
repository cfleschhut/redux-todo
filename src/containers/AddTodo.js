import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import Input from '../components/Input';
import Button from '../components/Button';

let AddTodo = ({ dispatch }) => {
  let input;

  return (
    <form
      className="flex-container"
      onSubmit={(e) => {
        e.preventDefault();
        if (!input.value.trim()) { return; }
        dispatch(addTodo(input.value));
        input.value = '';
      }}
    >
      <Input
        type="text"
        innerRef={(node) => { input = node }}
        placeholder="New todo"
      />
      <Button>
        Add
      </Button>
    </form>
  );
};

AddTodo = connect()(AddTodo);

export default AddTodo;
