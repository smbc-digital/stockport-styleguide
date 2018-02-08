import React, { Component } from 'react'
import Aside from '../Elements/Aside'

class Buttons extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <main>
                <article className="with-aside button-display">
                    <h1>Buttons</h1>
                    <p>Buttons highlight key calls to action across the website; ranging from downloading a document to logging into My Account.</p>
                    <p>If you want to link different pages together, text links should be used instead.</p>
                    <button className="button-primary" href="#">I'm a primary button</button>
                    <button className="button-secondary" href="#">I'm a secondary button</button>
                    <button className="button-inverted" href="#">I'm an inverted button</button>
                    <button className="button-primary" href="#" disabled>I'm a disabled button</button>
                    <button className="button-login" href="#">My Account login button</button>
                </article>
                <Aside/>
            </main>
        ) 
    } 
}

export default Buttons