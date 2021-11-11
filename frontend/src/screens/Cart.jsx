import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../redux/Action/Actions';

export default function Cart() {

    const userFoundCheck = useSelector(state => state.userFoundCheck);
    const { userInfo } = userFoundCheck; 

    const getCartItem = () => {
        let list = localStorage.getItem("cartItems");
        console.log(list);

        if (list) {
            return JSON.parse(localStorage.getItem("cartItems"))
        } else {
            return [];
        }
    }
    
    const dispatch = useDispatch();

    const handleCart = (food) => {
        dispatch(removeFromCart(food))
        window.location.reload();
    }

    const [items, setItems] = useState(getCartItem());
    const [qty, setQty] = useState(0);

    console.log(items);

    return (
        <>
        {
            userInfo ? (
                <div className="container mt-5 pt-5">
                    <div className="row">
                        {
                            items.map((x) => (
                                <div className="col-md-4" key={x.id}>
                                    <div className="card mx-auto" style={{width: "18rem"}}>
                                        <img className="card-img-top" src="https://picsum.photos/200/135" alt="..." />
                                        <div className="card-body">
                                            <h4 className="card-title">{x.foodName}</h4>
                                            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: "10px"}}>
                                                <div style={{display: "flex", flexDirection: "row", justifyContent: "left"}}>
                                                    <h5>Qty:</h5>&nbsp;
                                                    <input className="w-25" type="text" onChange={(e) => (setQty(e.target.value))} />
                                                </div>
                                                
                                                <h5>{x.foodPrice * qty}</h5>
                                                
                                            </div>
                                            <button className="btn btn-sm w-100 btn-outline-success">Buy Now</button><br/>
                                            <button className="btn btn-sm w-100 btn-outline-danger" onClick={() => (handleCart(x))}>Remove from cart</button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            ) : (
                <div className="mt-5 pt-5" style={{textAlign: "center"}}>
                    <h1>Login to continue...</h1>
                </div>
            )
        }
            
        </>
    )
}
