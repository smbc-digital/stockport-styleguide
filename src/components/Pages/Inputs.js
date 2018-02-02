import React, { Component } from 'react'
import Aside from '../Elements/Aside'

class Inputs extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <main>
                <article className="with-aside">
                    <section>
                        <h1>Inputs</h1>
                        <p>Form inputs are a vital way of allowing users to enter information on a page.</p>
                    </section>
                    <section>
                        <form method="get" role="form radio-button">
                            <fieldset className="input-group">
                                <h2>Radio Buttons</h2>
                                <p>Radio buttons allow users to make a single selection from a list of possible choices.</p>
                                <legend>Radio button example</legend>
                                <label className="input-radio-container">I'm a selected radio button! :)
                                    <input type="radio" checked="checked"/>
                                    <span className="checkmark"></span>
                                </label>
                                <label className="input-radio-container">I haven't been selected! :(
                                    <input type="radio"/>
                                    <span className="checkmark"></span>
                                </label>
                            </fieldset>
                        </form>
                    </section>
                    <section>
                        <h2>Checkboxes</h2>
                        <p>Checkboxes allow users to make one or more selections from a list.</p>
                        <form method="get" role="form checkboxes">
                            <fieldset className="input-group">
                                <legend>Checkbox example</legend>
                                <label htmlFor="checkbox1">Check, check, check</label>
                                <input id="checkbox1" name="checkbox1" type="checkbox" checked="checked"/>
                                <label htmlFor="checkbox2">I'm unchecked'</label>
                                <input id="checkbox2" name="checkbox2" type="checkbox"/>
                            </fieldset>
                        </form>
                    </section>
                    <section>
                        <h2>Text input</h2>
                        <p>Text inputs allow users to enter information. There are different types of text inputs, which provide slightly different experiences for users.</p>
                    </section>
                    <section>
                        <h2>Text inputs validation</h2>
                        <p>Validation allows us to show users where something hasn't gone quite right and highlights the exact point where they need to make a change - so they're not left guessing.</p>
                    </section>
                    <section>
                        <h2>My Account validation</h2>
                        <p>My Account signing up and logging in validation is slightly different. It allows us to provide a more detailed explanation of what information we need a user to input.</p>
                    </section>
                    <section>
                        <h2>Currency Input</h2>
                        <p>The currency input allows users to focus on the amount they are entering - without the need to input a pound sign. The input is narrow to reflect the information due to be input.</p>
                    </section>
                    <section>
                        <h2>Free text field</h2>
                        <p>If there is a character/word limit, we mist tell the user. We must also say how many characters/words have been used.</p>
                    </section>
                    <section>
                        <h2>Date input</h2>
                        <p>When we're asking a user for a memorable date, like a date of birth, we should seperate text fields rather than a date picker. We also provide an example above the inputs.</p>
                    </section>
                </article>
                <Aside/>
            </main>
        ) 
    } 
}

export default Inputs