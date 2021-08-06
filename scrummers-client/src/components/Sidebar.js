import React from 'react'
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';


function Sidebar() {


    return (
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div className="position-sticky pt-3">
                <ul className="nav flex-column">
                <li className="nav-item">
                    <Link to='/categories' className="nav-link active" aria-current="page" href="#">
                    <span data-feather="home"></span>
                    Category
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to='/products' className="nav-link active" aria-current="page" href="#">
                    <span data-feather="shopping-cart"></span>
                    Products
                    </Link>
                </li>
                </ul>

            </div>
        </nav>
    )
}

export default Sidebar
