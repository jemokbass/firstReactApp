import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import Context from '../context'

const styles = {
   li:{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '.5rem 1rem',
      border: '1px solid #ccc',
      borderRadius: '8px',
      margin: '0 0 .5rem 0'
   },
   input: {
      margin: '0 1rem 0 0'
   },
    button:{
       width: '30px',
       height: '30px',
       fontSize: '23px',
       display: 'inline-flex',
       alignItems: 'center',
       justifyContent: 'center'
    }
}

function TodoItem({todo, index, onChange}){
   const {removeTodo} = useContext(Context)
   const classes =[]
   if(todo.completed){
classes.push('done')
   }
   return(
      <li style={styles.li}>
         <span className={classes.join(' ')}>
            <input style={styles.input} type='checkbox' checked={todo.completed} onChange={()=>onChange(todo.id)}/>
         <strong>{index+1}</strong>
         &nbsp;
         {todo.title}
         </span>
         <button style={styles.button} onClick={removeTodo.bind(null, todo.id)} className='rm'>&times;</button></li>
   )
}

TodoItem.propTypes = {
todo: PropTypes.object.isRequired,
index: PropTypes.number,
onChange: PropTypes.func.isRequired
}

export default TodoItem
