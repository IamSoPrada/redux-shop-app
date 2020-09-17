import React, { Component } from 'react'
import GoodListItem from "../good-list-item"
import Spinner from "../spinner"
import { connect } from "react-redux"

import { WithGoodStoreService } from "../hoc"
import { fetchGoods, goodAddedToCart, goodAddedToWishList} from "../../actions"
import { compose } from "../../utils"
import "./GoodList.css"
import ErrorIndicator from '../error-indicator'




const GoodList = ({ goods, onAddedToCart, onAddedToWishList, category }) => {

    return (
        <ul className="good-list p-0 mt-4">
            {
                goods.map(good => {
                    if(good.category === category){
                        return (
                            <li key={good.id}> <GoodListItem good={good}
                                onAddedToCart={() => onAddedToCart(good.id)} 
                                onAddedToWishList={()=> onAddedToWishList(good.id)}/></li>
                        )
                    } else {
                        return null
                    }
                    
                })
            }
        </ul>

    )
}
class GoodListContainer extends Component {


    componentDidMount() {
        this.props.fetchGoods()
    }

    render() {
        const { goods, loading, error, onAddedToCart, onAddedToWishList,category } = this.props

        if (loading) {
            return <Spinner />
        }
        if (error) {
            return <ErrorIndicator />
        }
        return <GoodList category={category} goods={goods} onAddedToWishList={onAddedToWishList} onAddedToCart ={onAddedToCart }/>
    }
}


const mapStateToProps = ({GoodList:{ goods, loading, error }}) => {
    return { goods, loading, error }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const { goodStoreService } = ownProps;
    return {
        fetchGoods: fetchGoods(goodStoreService, dispatch),
        onAddedToCart: (id) => dispatch(goodAddedToCart(id)),
        onAddedToWishList: (id) => dispatch(goodAddedToWishList(id))
    }
}
export default compose(
    WithGoodStoreService(),
    connect(mapStateToProps, mapDispatchToProps))(GoodListContainer)

