import React from 'react';
import './employees-list-item.css';
import {useState} from 'react'

const EmployeesListItem (props,increase,rise) => {
    const [increase, setIncrease] = useState(increase);
    const [rise, setRise] = useState(rise);
    const [name, salary]= useState( props.name)
    let className="list-group-item d-flex justify-content-between";

    onInrease=()=>{
        setIncrease(({increase})=>({
            increase: !increase
        }))
    }
    onRise=()=>{
        setRise(({rise})=>({
           rise: !rise
        }))
    }
}

    if(increase){
        className+= ' increase '
    }
    if(rise){
        className+= ' like '
    }
     return (
        <li className={className}>
            <span className="list-group-item-label" onClick={this.onRise}>{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary+"$"}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm ">
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm "
                        onClick={this.onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}
}
export default EmployeesListItem;