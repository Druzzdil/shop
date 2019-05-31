import React from 'react'

export const Checkbox = props => {
    return (
        <li>
            <input key={props.id} onClick={props.handleCheckChieldElement} type="checkbox" checked={props.isChecked} value={props.value} /> {props.value}
        </li>
    )
}

export default Checkbox