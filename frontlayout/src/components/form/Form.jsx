import React from 'react'
import './form.css';
function Form() {
    return (
        <div className="location ">
            <form action method="post">
                <input type="search" />
                <button type="submit"><a href style={{ textDecoration: 'none' }}>Add to do list</a> </button>
            </form>
        </div>
    )
}

export default Form