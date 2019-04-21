import React, {Component} from 'react';
import styled from 'styled-components';
//import store from '../store';
import {Draggable } from 'react-beautiful-dnd';
//import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Container = styled.div`
	border: 1px solid lightgrey;
	border-radius: 2px;
	padding: 8px;
	margin-bottom: 8px;
	background-color: ${props => props.isDragging? 'lightgreen':'white'};
	display: flex;
`;

export default class Todo extends Component{
  //state = this.props.State;

	// componentWillReceiveProps(nextProps){
  //   if(this.state !== nextProps){
  //     this.setState (nextProps.State);
  //   }
  // }

  render(){
    return(
      <Draggable draggableId={this.props.todoId} index={this.props.index}>
        {(provided,snapshot) => (
          <Container {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} isDragging = {snapshot.isDragging}>
						{this.props.State.todos[this.props.todoId].title}
          </Container>
        )}
      </Draggable>
    )
  }
}

Todo.propTypes = {
  State: PropTypes.object.isRequired
}

// const mapStateToProps=state=>({
//   State: state,
// })

//export default connect(mapStateToProps,null)(Todo);
