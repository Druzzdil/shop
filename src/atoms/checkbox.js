import React from "react";

const Checkbox = ({ label, isSelected, onCheckboxChange, id }) => (
    <div className="form-check">
        <label>
            <input
                id={id}
                type="checkbox"
                name={label}
                checked={isSelected}
                onChange={onCheckboxChange}
                className="form-check-input"
            />
            {label}
        </label>
    </div>
);

export default Checkbox;