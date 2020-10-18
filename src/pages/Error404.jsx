import React from 'react'
import { Link } from 'react-router-dom';

function Error404() {
    return (
        <div className="container-fluid text-center mt-5">
            <h1>Error 404!!!!</h1>
            <Link to="/">
                <button className="btn btn-danger mt-2">
                    Inapoi la pagina principala
                </button>
            </Link>
        </div>
    )
}

export default Error404
