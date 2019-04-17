import React, {Component} from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import store from '../store';
import Column from './column';
import {orderChange, columnChange} from '../Actions/changeOrder';

const Container = styled.div`  margin: 8px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  `;

export class MainSection extends Component {
  state = store.getState();
  constructor(props){
    super(props);
  }

  onDragStart = (start) => {
    document.body.style.color = 'orange';

  }

  onDragEnd = (result) => {
    document.body.style.color = 'inherit';
    const {destination, source, draggableId, type} = result;
    if(!destination){
      return;
    }
    if(destination.droppableId === source.droppableId && destination.index === source.index){
      return;
    }

    const start = this.state.columns[source.droppableId];
    const finish = this.state.columns[destination.droppableId];

    //if change order
    if(start === finish){
      console.log("dragEnd");
      const newTodoIds = Array.from(start.todoIds);
      newTodoIds.splice(source.index,1);
      newTodoIds.splice(destination.index,0,draggableId);

      const newColumn = {
        ...start,
        todoIds: newTodoIds
      };
      console.log("newColumn",newColumn)
      this.props.dispatch(orderChange(newColumn,source.droppableId));
    }
  }

  render(){
    return (
      <DragDropContext onDragStart={this.onDragStart} onDragEnd={this.onDragEnd}>
        <Container>
          {this.state.columnOrder.map((columnId) => {
            console.log("col id", columnId);
            return <Column key={columnId} columnId = {columnId}/>;
          })}
        </Container>
      </DragDropContext>
    )
  }
}

// MainSection.propTypes = {
//   orderChange: PropTypes.func.isRequired,
//
// }

// const mapStateToProps=state=>{
//   console.log(state);
//   // return {
//   //   something:state.columns
//   // }
// }
// const mapDispatchToProps=(dispatch)=>({
//   Change:(newColumn,Id)=>{
//     dispatch(orderChange(newColumn,Id))
//   }
// })


 export default connect(null, {orderChange})(MainSection);
//export default connect(mapStateToProps, mapDispatchToProps)(MainSection);
