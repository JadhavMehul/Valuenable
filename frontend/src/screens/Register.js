import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { registerUser } from "../redux/Action/Actions";

export default function Register() {

    const dispatch = useDispatch()

    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()
    const [gender, setGender] = useState()

    const register = (e) => {
        e.preventDefault();
        dispatch(registerUser(firstName, lastName, email, phone, password, gender))
        // console.log(firstName+ lastName+ email+ phone+ password+ gender);
    } 

    return (
        <div className="register_page">
            <div className="py-5">
                <div className="row m-0">
                    <div className="col-md-3 register_desc my-auto">
                        <div>
                            <i className="fas fa-rocket"></i>
                        </div>
                        <h2>Welcome</h2>
                        <p>You are 30 seconds away from getting register!</p>
                            <button className="log_btn btn d-block mx-auto">Login</button>
                    </div>
                    <div className="register_form col-md-9">
                        <h2>Register User</h2>
                        <form action="" onSubmit={register}>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="text" className="form-control w-75 ml-auto" placeholder="First Name *" onChange={(e) => setFirstName(e.target.value)} />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="text" className="form-control w-75 mr-auto" placeholder="Last Name *" onChange={(e) => setLastName(e.target.value)} />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="email" className="form-control w-75 ml-auto" placeholder="Your Email *" onChange={(e) => setEmail(e.target.value)} />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="text" className="form-control w-75 mr-auto" placeholder="Your Phone *" onChange={(e) => setPhone(e.target.value)} />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="password" className="form-control w-75 ml-auto" placeholder="Password *" onChange={(e) => setPassword(e.target.value)} />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="password" className="form-control w-75 mr-auto" placeholder="Confirm Password *" onChange={(e) => setConfirmPassword(e.target.value)} />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group w-75 ml-auto">
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" value="Male" onClick={() => setGender("Male")} />
                                        <label className="form-check-label">Male</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" value="Female" onClick={() => setGender("Female")} />
                                        <label className="form-check-label">Female</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="register_btn">
                            <button className="btn" type="submit">Register</button>
                        </div>
                        </form>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
