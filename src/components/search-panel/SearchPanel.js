import React from 'react'
import "./SearchPanel.css"

const SearchPanel = () => {
    return (
        <div className="input-group container mt-3 ">
            <div className="input-group-prepend">
                <button className="btn btn-outline-dark" type="button" id="button-addon1"><i className="fa fa-search" /></button>
            </div>
            <input style={{ height:"5vh"}} type="text" className="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" />
        </div>
    )
}

export default SearchPanel