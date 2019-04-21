import React, {Component} from 'react';
import styled from 'styled-components';
//import {Droppable,Draggable } from 'react-beautiful-dnd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {addTodo} from '../Actions/changeOrder';

const Container = styled.div`
  background-color: white;
  align-items: center;
  justify-content: center;

  padding: 10px;
  display: flex;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
`;

const Input = styled.input`
  width: 50%;
  align-items: center;
  justify-content: center;
  margin: 10px;
  height: 5vh;
  text-align: center;
`;

class AddTodo extends Component{
  state = {
    title: null,
  }

  handleChange = (event) => {
    var title = event.target.value;
    this.setState({title:title})
  }


  handleSubmit = (event) =>{
    event.preventDefault();
    var currLen = Object.keys(this.props.State.todos).length;
    var id = "todo-"+(currLen+1);
    const newTodo = {
      id:id, title: this.state.title, status:'ToDo', completed:false
    }
    const newTodoIds = this.props.State.columns.ToDo.todoIds;
    newTodoIds.push(id);
    this.props.addTodo(newTodo, newTodoIds);
    event.target.title.value = '';
  }

  render(){
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <Input type='text' placeholder="Add new todo" onChange={this.handleChange.bind(this)} name="title"/>
          <input type='submit' value="Submit"/>
        </Form>
      </Container>
    )
  }
}

AddTodo.propTypes = {
  State: PropTypes.object.isRequired
}

const mapStateToProps=state=>({
  State: state,
})

export default connect(mapStateToProps,{addTodo})(AddTodo);
