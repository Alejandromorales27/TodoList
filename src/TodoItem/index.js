import {CompleteIcon} from '../CompleteIcon'
import {DeleteIcon} from '../DeleteIcon'
import './todoItems.css'


function ToDoItem({text,completed,onComplete,onDelete}){
    return(
      <li>
        <CompleteIcon
        completed={completed}
        onComplete={onComplete}
        />
  
{/*         <span  className={`Icon Icon-check ${completed && "Icon-check--active"}`} >
          V
        </span> */}
        <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
            {text}
        </p>
        <DeleteIcon
        onDelete={onDelete}
        />
{/*         <span onClick={onDelete} className='Icon Icon-delete'>
          X
        </span>     */}
      </li>
    );
  }

  export {ToDoItem};