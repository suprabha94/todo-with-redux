import React, {Component} from 'react'
import { DragDropContext } from 'react-beautiful-dnd';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Column from './column';
import {orderChange, columnChange} from '../Actions/changeOrder';
//import store from '../store';

const Container = styled.div`  margin: 8px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  `;

class MainSection extends Component {
  constructor(props){
    super(props);
    this.state = this.props.State;

  }

  componentWillReceiveProps(nextProps){
    if(this.state !== nextProps){
      this.setState (nextProps.State);
    }
  }

  onDragStart = (start) => {
    document.body.style.color = 'orange';

  }

  onDragEnd = (result) => {

    document.body.style.color = 'inherit';
    const {destination, source, draggableId} = result;
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

      const newTodoIds = Array.from(start.todoIds);
      newTodoIds.splice(source.index,1);
      newTodoIds.splice(destination.index,0,draggableId);

      const newColumn = {
        ...start,
        todoIds: newTodoIds
      };

      const newState = {
        ...this.state,
        columns: {
          ...this.columns,
          [source.droppableId]: newColumn
        }
      }
      this.setState(newState);
      this.props.orderChange(newColumn,source.droppableId);
      return;
    }

    const startTodoIds = Array.from(start.todoIds);
    const finishTodoIds = Array.from(finish.todoIds);
    startTodoIds.splice(source.index,1);
    finishTodoIds.splice(destination.index,0,draggableId);

    const newColumns = {
      ...this.state.columns,
      [source.droppableId]: {
        ...this.state.columns[source.droppableId],
        todoIds: startTodoIds
      },
      [destination.droppableId]: {
        ...this.state.columns[destination.droppableId],
        todoIds: finishTodoIds
      }
    }

    const newState = {
      ...this.state,
      columns: newColumns
    }
    this.setState(newState);
    this.props.columnChange(newState);
  }

  render(){
    return (
      <DragDropContext onDragStart={this.onDragStart} onDragEnd={this.onDragEnd}>
        <Container>
          {this.state.columnOrder.map((columnId) => {
            return <Column key={columnId} columnId = {columnId} State={this.state}/>;
          })}
        </Container>
      </DragDropContext>
    )
  }
}

MainSection.propTypes = {
  orderChange: PropTypes.func.isRequired,
  State: PropTypes.object.isRequired
}

const mapStateToProps=state=>({
  State: state,
})
// const mapDispatchToProps=(dispatch)=>({
//   Change:(newColumn,Id)=>{
//     dispatch(orderChange(newColumn,Id))
//   }
// })



//const sub = store.subscribe();
export default connect(mapStateToProps, {orderChange,columnChange})(MainSection);
//export default connect(null, mapDispatchToProps)(MainSection);
