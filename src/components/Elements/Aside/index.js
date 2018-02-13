import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import NavItem  from '../NavItem'

class Aside extends Component{
    constructor(props){
        super(props)
        this.routes = [
            "Colours",
            "Typography",
            "Navigation",
            "Buttons",
            "Inputs",
            "Alerts",
            "Tables",
            "Profiles",
            "Icons"
        ]
    }

    render(){
        return (
            <aside className="article-aside">
                <h2>Style guide</h2>
                <nav>
                    <ul>
                        {this.routes.map((route, index) => {
                            return(
                                <NavItem to={route} key={index} name={route}/>
                            )
                        })}
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                    </ul>
                </nav>
            </aside>
        ) 
    } 
}

export default Aside