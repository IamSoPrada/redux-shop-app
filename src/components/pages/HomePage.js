import React from 'react'
import Categories from "../categories"
const Jumbotron = () => {
    return (
        <div class="jumbotron jumbotron-fluid" style={{backgroundColor:"white", border:"1px grey solid", borderRadius:"5px", marginTop:"100px"}}>
            <div class="container-fluid">
                <h2 >Скидка 15% при покупке от 5 книг!</h2>
                <h4 >Введите промокод "HTML15"</h4>
                <p class="lead">К каждой книге подарок!</p>
            </div>
            </div>
    )
}


const HomePage = () => {

    return (
        <div className="d-flex flex-column justify-content-between align-items-center">
            <Categories />

            <Jumbotron />
        </div>
        
    )
}
export default HomePage;