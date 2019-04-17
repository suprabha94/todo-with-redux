import React, {Component} from 'react';
import styled from 'styled-components';
import store from '../store';
import {Droppable,Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
	border: 1px solid lightgrey;
	border-radius: 2px;
	padding: 8px;
	margin-bottom: 8px;
	background-color: ${props => props.isDragging? 'lightgreen':'white'};
	display: flex;
`;

export default class Todo extends Component{
  state = store.getState();

  render(){
    return(
      <Draggable draggableId={this.props.todoId} index={this.props.index}>
        {(provided,snapshot) => (
          <Container {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} isDragging = {snapshot.isDragging}>
            {this.state.todos[this.props.todoId].title}
          </Container>
        )}
      </Draggable>
    )
  }

}
