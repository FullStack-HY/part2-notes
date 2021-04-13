import React from 'react'

const SearchFilter = ({ filterText, filterChangeHandler }) => {
    return (
        <>
            <div>filter shown with:
            <input value={filterText} onChange={filterChangeHandler}/>
            </div>
        </>
    )
}

export default SearchFilter