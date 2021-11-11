import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
import { loginUser } from "../redux/Action/Actions";

export default function Login(props) {

    // const history = useHistory();

    const dispatch = useDispatch()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const userFoundCheck = useSelector(state => state.userFoundCheck);
    const { userInfo } = userFoundCheck; 

    const history = useHistory();

    const login = (e) => {
        e.preventDefault()
        dispatch(loginUser(email, password))
    }

    // const red = () => {
    //     history.push("/")
    // }

    useEffect(() => {
        if (userInfo) {
            history.push("/")
        }
    }, [history, userInfo])

    return (
        <div className="login_page">
            <div className="container py-5">
                <div className="row m-0">
                    
                    <div className="login_form col-md-7">
                        <h2>Login User</h2>
                        <form action="" onSubmit={login}>
                            <div className="row">

                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="email" className="form-control w-75 ml-auto" placeholder="Your Email *" onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                </div>
                                
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="password" className="form-control w-75 mr-auto" placeholder="Password *" onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                </div>
                                
                            </div>
                            
                                <button className="login_btn btn" type="submit">Login</button>
                           
                        </form>
                        
                    </div>
                    <div className="col-md-5 register_desc my-auto">
                        <div>
                            <i className="fas fa-rocket"></i>
                        </div>
                        <h2>Welcome</h2>
                        <p>Dont have account register now and get connected.</p>
                        <a href="/register" className="reg_btn btn d-block mx-auto">Register</a>
                    </div>
                </div>
            </div>
        </div>
    
    )
}
