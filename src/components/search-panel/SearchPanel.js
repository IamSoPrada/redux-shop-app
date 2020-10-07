import React, { useState } from 'react'
import { connect } from 'react-redux'
import { onFindGood } from "../../actions/find"
import "./SearchPanel.css"

const SearchPanel = ({ find }) => {
    const [findGood, setFindGood] = useState("")

    return (
        <div className="input-group mt-3 ">
            <input style={{ height: "5vh" }} onChange={e => setFindGood(e.target.value)} type="text" className="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" />
            <div className="input-group-prepend">
                <button onClick={() => find(findGood)} className="btn btn-outline-dark" type="button" id="button-addon1"><i className="fa fa-search" /></button>
            </div>
        </div>
    )
}

const mapStateToProps = ({ appFind: { findGood } }) => {
    return {
        findGood
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        find: (input) => dispatch(onFindGood(input))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchPanel)