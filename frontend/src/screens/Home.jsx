import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { userFound } from '../redux/Action/Actions';
import Login from './Login';

export default function Home() {

    
    return (
        <>
            
                    <div className="banner"><br/><br/><br/>
                        <div className="banner_title">
                            <h1>Super Foods</h1>   
                        </div>
                        <p className="banner_subtitle d-block mx-auto">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
                            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
                            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
                            Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <div className="banner_btn d-block mx-auto">
                            <a href="/order" type="button" className="btn btn-outline-warning order">Order</a>
                            <a href="/table" type="button" className="btn btn-outline-warning book_table">Book Table</a>
                        </div>
                    </div>
                
        </>
    )
}
