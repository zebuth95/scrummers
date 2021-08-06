import React, {useState,useEffect} from 'react'
import Nav from './Nav'
import Sidebar from './Sidebar'
import {Redirect} from "react-router-dom";


const Layout = (props) => {
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        if (!JSON.parse(localStorage.getItem("access"))){
            setRedirect(true)
        }
    }, []);

    if (redirect){
        return <Redirect to={'/login'}/>;
    }

    return (
        <div>
            
            < Nav />

            <div className="container-fluid">
            <div className="row">

                <Sidebar />

                <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">

                {props.children}

                </main>
            </div>
            </div>

        </div>
    )
}

export default Layout
