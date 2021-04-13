import React from 'react'

const AddNew = ({ submitHandler, newName, nameChangeHandler, newPhone, phoneChangeHandler }) => {
    return (
        <>
            <h2>Add a new</h2>
            <form onSubmit={submitHandler}>
            <div>name:
            <input value={newName} onChange={nameChangeHandler}/>
            </div>
            <div>number:
            <input value={newPhone} onChange={phoneChangeHandler}/>
            </div>
            <div>
            <button type="submit">add</button>
            </div>
            </form>
        </>
    )
}

export default AddNew