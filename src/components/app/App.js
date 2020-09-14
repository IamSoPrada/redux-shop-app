import React from 'react'
import { Route, Switch } from "react-router-dom"
import ShopHeader from "../shop-header"
import Footer from '../footer'
import Login from '../login'
import { HomePage, CardPage, Books, Gifts } from "../pages"

import "./App.css"


const App = () => {

    return (

        <>
        <main role="main" className="container d-flex flex-column justify-content-start p-0" style={{height:"100vh"}}>
            <ShopHeader numItems={3} total={2518} />

            <Switch>
                <Route path="/"
                    component={HomePage}
                    exact />
                <Route path="/cart"
                    component={CardPage}
                />
                <Route path="/login"
                    component={Login}
                />
                <Route path="/books"
                    component={Books}
                />
                <Route path="/gifts"
                    component={Gifts}
                />
            </Switch>
        </main>
        
        <Footer />
        
        </>

    )
}
export default App;