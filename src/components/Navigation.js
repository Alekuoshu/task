/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

// Component for navigation section
class Navigation extends Component {
    render(){
        return (
            <nav className='navbar navbar-dark bg-dark'>
                <a href="" className="text-white">
                    <h1>
                        { this.props.title }
                        <span className="badge badge-pill badge-light ml-2">
                            { this.props.ntareas }
                        </span>
                    </h1>
                </a>
            </nav>
        );
    }
}

export default Navigation;