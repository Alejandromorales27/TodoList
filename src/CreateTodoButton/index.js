import './createTodoButton.css'

function CreateTodoButton(){
    return(
        <button onClick={
          (event)=>{
            console.log("le diste click")
            console.log(event)
            console.log(event.target)
            console.log(event.target.innerHTML)

          }}>+
        </button>
    );
  }

export {CreateTodoButton};