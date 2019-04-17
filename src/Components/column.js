import React, {Component} from 'react';
import styled from 'styled-components';
import store from '../store';
import {Droppable,Draggable } from 'react-beautiful-dnd';

import Todo from './todo';


const Container = styled.div`
  background-color: white;
  margin: 10px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  width: 220px;
  display: flex;
  flex-direction: column;
  min-height: 30vh;
`;

const Title = styled.h3`
	padding: 8px;
`;

const TaskList = styled.div`
	padding: 8px;
	transition:background-color 0.2s ease;
	background-color: ${props => props.isDraggingOver? 'skyblue':'inherit'};
	flex-grow: 1;
	min-height: 100px;
`;


export default class Column extends Component{
  state = store.getState();
  todoIds = this.state.columns[this.props.columnId].todoIds;
  render(){
    return (
      <Container>
        <Title>
          {this.state.columns[this.props.columnId].title}
        </Title>
        <Droppable droppableId={this.props.columnId}>
        {(provided,snapshot) => (
          <TaskList {...provided.droppableProps} isDraggingOver={snapshot.isDraggingOver} ref={provided.innerRef}>
            {this.todoIds.map((todoId,index) =>{return <Todo key = {todoId} todoId = {todoId} index={index}/>} )}
            {provided.placeholder}
          </TaskList>
        )}
        </Droppable>
      </Container>
    )
  }
}
