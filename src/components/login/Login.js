import React from 'react'
import {Link} from "react-router-dom"
import "./Login.css"

 const Login = () => {
    return (
    <div className="d-flex justify-content-center">
        <form class="form-signin text-center" style={{width:"35%"}}>
                <img class="mb-4" src="https://img.pngio.com/pixel-avatar-yellow-fox-smile-png-transparent-image-and-clipart-pixel-png-640_640.png" alt="" width="150" height="150" />
                <h1 class="h3 mb-3 font-weight-normal">Войти</h1>
                <label for="inputEmail" class="sr-only">Email адрес</label>
                <input type="email" id="inputEmail" class="form-control" placeholder="Email адрес" required autofocus />
                <label for="inputPassword" class="sr-only">Пароль</label>
                <input type="password" id="inputPassword" class="form-control mt-2" placeholder="Пароль" required/>
                <div class="checkbox mb-3">
                    <label>
                    <input type="checkbox" value="remember-me" className="mt-3"/> Запомнить меня
                    </label>
                </div>
                <button class="btn btn-lg btn-primary btn-block" type="submit">Войти</button>
                <Link to="/signup">
                    <button class="btn btn-lg btn-default btn-block">Зарегистрироваться</button>
                </Link>
                
        </form>
    </div>
        

    )
}
export default Login