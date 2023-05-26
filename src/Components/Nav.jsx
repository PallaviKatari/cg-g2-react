import React from "react";
//npm install react-router-dom
import { Link } from "react-router-dom";
import logo from '../Assets/react.png';
import '../Styles/Nav.css';
export default function NavBar() {

    return (
        <div>
            <nav className="navbar navbar-inverse navbar-fixed-top" >
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link className="navbar-brand" to=""><img src={logo} className="App-logo1" alt="logo" /></Link>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav">
                            <li className="active"></li>
                            <li className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown" href="concepts">React Concepts<span className="caret"></span></a>
                                <ul className="dropdown-menu" id="concepts">
                                    <li><Link to="lifecycle">LifeCycle</Link></li>
                                    <li><Link to="routedemo">RouteDemo</Link></li>
                                    <li><Link to="rooks">Rooks</Link></li>
                                    <li><Link to="filter">Filter</Link></li>
                                    <li><Link to="cards">JSON Card Demo</Link></li>
                                    <li><Link to="binding">One way binding</Link></li>
                                    <li><Link to="comp">Functional and Class Components</Link></li>
                                    <li><Link to="prop">Props</Link></li>
                                    <li><Link to="style">Component Styling</Link> </li>
                                    <li><Link to="spread">Spread Syntax</Link></li>
                                    <li><Link to="fragments">React Fragments</Link></li>
                                    <li><Link to="state">Conditional Rendering with State</Link></li>
                                    <li><Link to="cond">Conditional Rendering with error</Link></li>
                                    <li><Link to="map">Map</Link></li>
                                    <li><Link to="form">Form Validation</Link></li>
                                    <li><Link to="hookform">ReactHookForm</Link></li>
                                    <li><Link to="incdec">IncrementDecrement</Link></li>
                                    <li><Link to="fakeapi">Json Fake API</Link></li>
                                    <li><Link to="axios">Axios Demo</Link></li>
                                    <li><Link to="awaitasync">Axios await async demo</Link></li>
                                    <li><Link to="useAxios">useAxios Demo</Link></li>
                                    <li><Link to="events">Events Demo</Link></li>
                                    <li><Link to="apisearch">API Search and Filter</Link></li>
                                    <li><Link to="sign">Signature Pad</Link></li>
                                    <li><Link to="cart">Add to cart</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}