import React from 'react'
import './Modal.css'

export default class Modal extends React.Component{
   state={
      isOpen: false
   }
   render(){
      return(
         <React.Fragment>
            <button onClick={()=>this.setState({isOpen:true}) }>Открыть модальное окно</button>
           {this.state.isOpen && (
            <div className="modal">
               <div className="modal-body">
                  <h1>Заголовок</h1>
                  <h2>lorem ipsum все дела</h2>
                  <button onClick={()=>this.setState({isOpen:false})} className="modal-button">Close &times;</button>
               </div>
            </div>)}
         </React.Fragment>
      )
   }
}
