import React from 'react'
import {ReactComponent as DeleteSVG} from './check.svg'
import {ReactComponent as CheckSVG} from './delete.svg'
import './todoIcon.css'


const iconTypes={
    "check":(color)=><CheckSVG className='icon-svg' fill={`${color}`}/>,
    "delete":(color)=><DeleteSVG className='icon-svg' fill={`${color}`}/>

}

function TodoIcon({type,color,onClick}){
    return(
        <span 
        className={`Icon Icon-${type}`}
        onClick={onClick}
        >
            {iconTypes[type](color)}
        </span>
    )

};

export {TodoIcon};