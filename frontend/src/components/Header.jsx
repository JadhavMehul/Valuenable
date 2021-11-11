import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/Action/Actions';

export default function Header() {

    const userFoundCheck = useSelector(state => state.userFoundCheck);
    const { userInfo } = userFoundCheck; 

    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(logout())
    }

    return (
        <>
            <nav className="navbar fixed-top navbar-expand-lg navbar-light">
                <div className="container header">
                    <a className="navbar-brand nav_brand" href="/">Super Foods</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link" style={{fontSize: "24px"}} href="/">Home</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" style={{fontSize: "24px"}} href="/menu">Menu</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" style={{fontSize: "24px"}} href="/cart">Cart</a>
                            </li>
                            <li className="nav-item active dropdown">
                                {
                                    userInfo?(
                                        <>
                                            <a className="nav-link dropdown-toggle"  role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{width: "22px", height: "22px", margin: "16px", backgroundColor: "#352eb1", borderRadius: "50%"}} href="/"></a>
                                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <a class="dropdown-item" style={{textTransform: "capitalize"}} href="#">{userInfo.fName + " " + userInfo.lName}</a>
                                                <div class="dropdown-divider"></div>
                                                <a class="dropdown-item" href="#" onClick={logoutHandler}>Logout</a>
                                            </div>
                                        </>
                                    ) : (
                                        <a className="nav-link" style={{fontSize: "24px"}} href="/login">Login</a>
                                    )
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
