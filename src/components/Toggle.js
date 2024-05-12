import React from 'react'

const Toggle = ({ handleChange, isChecked }) => {
    
    return (
        <div className="toggle-container">
            <input
                type="checkbox"
                name="dark-light-toggle"
                id="check"
                className='toggle'
                onChange={handleChange}
                checked={isChecked} />
                <label htmlFor="check"></label>
        </div>
    )
}

export default Toggle;