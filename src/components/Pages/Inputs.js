import React, { Component } from 'react'
import Aside from '../Elements/Aside'
import { RadioInputsContainer, CheckboxInputsContainer, MemorableDateInputContainer } from 'smbc-react-components'

class Inputs extends Component{
    constructor(props){
        super(props)
        this.radioInputs = [
            {
                "id": "radio-inline-1",
                "label": "Ham",
                "name": "MeatChoice",
                "value": "Ham"
            },
            {
                "id": "radio-inline-2",
                "label": "Chicken",
                "name": "MeatChoice",
                "value": "Chicken"
            },
            {
                "id": "radio-inline-3",
                "label": "Disabled",
                "name": "MeatChoice",
                "value": "disabled",
                "disabled": "true"
            }
        ]

        this.checkboxInputs = [
            {
                "id": "checkbox-inline-1",
                "label": "Brie",
                "name": "CheeseChoice",
                "value": "Brie"
            },
            {
                "id": "checkbox-inline-2",
                "label": "Cheshire",
                "name": "CheeseChoice",
                "value": "Cheshire"
            },
            {
                "id": "checkbox-inline-3",
                "label": "This value should span over two lines. This value should span over two lines. This value should span over two lines. This value should span over two lines.",
                "name": "CheeseChoice",
                "value": "NULL"
            },
            {
                "id": "checkbox-inline-4",
                "label": "This value should span over three lines. This value should span over three lines. This value should span over three lines. This value should span over three lines. This value should span over three lines. This value should span over three lines.",
                "name": "CheeseChoice",
                "value": ""
            },
            {
                "id": "checkbox-inline-5",
                "label": "Disabled",
                "name": "CheeseChoice",
                "value": "disabled",
                "disabled": "true"
            }
        ]
    }

    onChangeHandler(event) {
		console.log("app change handler hit")
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
                            <RadioInputsContainer
                                header='Radio Buttons'
                                description='Radio buttons allow users to make a single selection from a list of possible choices.'
                                legend='Meat choice'
                                options={this.radioInputs}
                                onChange={this.onChangeHandler.bind(this)}
                            />
                        </form>
                    </section>
                    <section>
                        <form method="get" role="form checkboxes">
                            <CheckboxInputsContainer
                                header='Checkboxes'
                                description='Checkboxes allow users to make one or more selections from a list.'
                                legend='Cheese choice'
                                options={this.checkboxInputs}
                                onChange={this.onChangeHandler.bind(this)}
                            />
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
                     <section>
                        <form>
                            <MemorableDateInputContainer heading='Memorable date input' description="When we're asking a user for a memorable date, like a date of birth, we should seperate text fields rather than a date picker. We also provide an example above the inputs." />
                        </form>
                    </section>
                </article>
                <Aside/>
            </main>
        ) 
    } 
}

export default Inputs