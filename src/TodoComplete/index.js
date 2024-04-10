import { Children } from "react";

function TodoComplete({children}){
    return(
        <div>
            <h3>Tareas completas</h3>
            {children}
        </div>
    )
};

export {TodoComplete};