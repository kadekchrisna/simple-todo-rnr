import { connect } from 'react-redux';
import ToDoList from '../components/ToDoList';
import { toggleToDo } from '../actions/Index';

const mapStateToProps = state => ({
    todos: state.todos
})

const mapDispatchToProps = dispatch => ({
    toggleToDo: id => dispatch(toggleToDo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList)