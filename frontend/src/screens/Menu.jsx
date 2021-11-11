import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, listMenu } from '../redux/Action/Actions';

export default function Menu() {

    const dispatch = useDispatch();
    const userFoundCheck = useSelector(state => state.userFoundCheck);
    const { userInfo } = userFoundCheck; 

    const menuList = useSelector(state => state.menuList);
    const { loading, error, menu } = menuList; 

    const [qty, setQty] = useState();

    const handleCart = (food) => {
        dispatch(addToCart(food))
    }

    let sortedCategory = [];
    if (menu) {
        const allCategory = [];
        menu.map((category) => (allCategory.push(category.foodCategory)))
        sortedCategory = [...new Set(allCategory)];
    }


    useEffect(() => {
        dispatch(listMenu());
    }, []);

    return (

        <>
            {
                userInfo ? (
                    <div className="banner container">
                        {
                            sortedCategory.map((category,index) => (
                                <div key={index}>
                                    <div className="banner_title">
                                        <h1>{category}</h1>   
                                    </div>
                                    <br/>  
                                    <div className="row">
                                        {
                                            loading ? (
                                                <h1>Loading...</h1>
                                            )   :   error ? ( 
                                                <h1>{error}</h1>
                                            )   :   (
                                                <>
                                                {
                                                    menu.filter(x => x.foodCategory === category).map((menu) => (
                                                        <div className="col-md-4 py-3" key={menu.id}>
                                                            <div className="card mx-auto" style={{width: "18rem"}}>
                                                                <img className="card-img-top" src="https://picsum.photos/200/135" alt="..." />
                                                                <div className="card-body">
                                                                    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                                                                        {
                                                                            (menu.foodName).length > 15 ? (
                                                                                <h4 className="card-title m-0">{(menu.foodName).slice(0,15) + "..."}</h4>
                                                                            ) : (
                                                                                <h4 className="card-title m-0">{menu.foodName}</h4>
                                                                            )
                                                                        }
                                                                        <p className="price m-0">₹{menu.foodPrice}</p>
                                                                    </div>
                                                                    <div className="add_cart_btn">
                                                                        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                                                                            <button className="btn btn-warning w-100" onClick={() => (handleCart(menu))}>Add to cart</button>
                                                                            {/* <select onChange={(e) => setQty(e.target.value)}>
                                                                                {[...Array(10).keys()].map(
                                                                                    (x) => (
                                                                                        <option key={x} value={x}>
                                                                                        {x}
                                                                                    </option>
                                                                                    )
                                                                                )}
                                                                            </select> */}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))
                                                }
                                                </>
                                            )
                                        }
                                    </div>
                                </div>
                            ))
                        }
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
