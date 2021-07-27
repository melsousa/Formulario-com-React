import React from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'

import IconButton from '../template/IconButton'
import {markAsDone, markAsPending, remove} from './todoActions'

const TodoList = props => {
    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                <td>
                    <IconButton btnStyle='success' icon='check' hide={todo.done} onClick={() => props.markAsDone(todo)} />
                    <IconButton btnStyle='warning' icon='undo' hide={!todo.done} onClick={() => props.markAsPending(todo)} />
                    <IconButton btnStyle='danger' icon='trash-o' hide={!todo.done} onClick={() => props.remove(todo)}/>
                </td>
            </tr>
        )) 
    }
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className='tableActions'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}
//mapeando como vai obter o atributo list
const mapStateToProps = state =>({list: state.todo.list})
const mapDispatchToProps = dispatch => 
    bindActionCreators({remove,markAsPending,markAsDone}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
