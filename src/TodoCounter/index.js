import './TodoCounter.css';


function TodoCounter({total,completed}){
    return(
      <div>
        <h2 className={`${completed==total ? "tareasCompletas" : ""}`}>
          has completado <strong>{completed}</strong> de <strong>{total}</strong> tareas
        </h2>
        <h2 className={`${completed== total && total!=0 ? "completasteTodo":"tareasCompletas"}`}>
          completaste todo
        </h2>
        <h2 className={`${total === 0 ? "completasteTodo": "tareasCompletas"}`}>no tienes tareas por hacer</h2>
      </div>

      
    );
  }

export {TodoCounter};