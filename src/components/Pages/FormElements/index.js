import React, { Component } from 'react'
import Aside from '../../Elements/Aside'
import { RadioInputsContainer, CheckboxInputsContainer, MemorableDateInputContainer, TextInputContainer, AddressPicker, SelectInputContainer } from 'smbc-react-components'

class Inputs extends Component{
    constructor(props){
        super(props)
        this.radioInputs = [
            {
                "id": "radio-inline-1",
                "label": "This value should span over one line",
                "name": "MeatChoice",
                "value": ""
            },
            {
                "id": "radio-inline-2",
                "label": "This value should span over two lines. This value should span over two lines. This value should span over two lines. This value should span over two lines.",
                "name": "MeatChoice",
                "value": ""
            },
            {
                "id": "radio-inline-3",
                "label": "This value should span over three lines. This value should span over three lines. This value should span over three lines. This value should span over three lines. This value should span over three lines. This value should span over three lines.",
                "name": "MeatChoice",
                "value": ""
            },
            {
                "id": "radio-inline-4",
                "label": "This input is disabled",
                "name": "MeatChoice",
                "value": "",
                "disabled": "true"
            }
        ]

        this.checkboxInputs = [
            {
                "id": "checkbox-inline-1",
                "label": "This value should span over one line",
                "name": "CheeseChoice",
                "value": ""
            },
            {
                "id": "checkbox-inline-2",
                "label": "This value should span over two lines. This value should span over two lines. This value should span over two lines. This value should span over two lines.",
                "name": "CheeseChoice",
                "value": ""
            },
            {
                "id": "checkbox-inline-3",
                "label": "This value should span over three lines. This value should span over three lines. This value should span over three lines. This value should span over three lines. This value should span over three lines. This value should span over three lines.",
                "name": "CheeseChoice",
                "value": ""
            },
            {
                "id": "checkbox-inline-4",
                "label": "This input is disabled",
                "name": "CheeseChoice",
                "value": "",
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
                        <h1>Form Elements</h1>
                        <p>Form inputs are a vital way of allowing users to enter information on a page.</p>
                    </section>
                    <section>
                        <h2>Selections</h2>
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
                            <form method="get" role="form select-input">
                                <SelectInputContainer
                                    description="Drop downs allow a user to select one options from a list; these are foun most commonlt in address finders. Before using a drop down we should think about whether radio buttons are more suitable." 
                                    id="style-guide-select"
                                    name="style-guide-select"
                                    placeholder="Select an address..."
                                    onChange={this.onChangeHandler.bind(this)} 
                                    label="Drop downs"
                                    options={[{value: '1', name: 'first option'}, {value: '2', name: 'second option'}]}
                                />
                            </form>
                        </section>
                    </section>
                    <section>
                        <h2>Text inputs</h2>
                        <section>
                            <form method="get" role="form text-input">
                                <TextInputContainer
                                    label="Text fields"
                                    id="fullname"
                                    type="text"
                                    optional={true}
                                    description="Text inputs allow users to enter information. There are different types of text inputs, which provide slightly different experiences for users."
                                    onChangeHandler={() => {}}
                                />
                            </form>
                        </section>
                        <section>
                            <form method="get" role="form text-input">
                                <TextInputContainer
                                    label="Text field validation"
                                    id="fullname"
                                    type="text"
                                    optional={false}
                                    description="Validation allows us to show users where something hasn't gone quite right and highlights the exact point where they need to make a change - so they're not left guessing."
                                    onChangeHandler={() => {}}
                                />
                            </form>
                        </section>
                        <section>
                            <h2>Free text field</h2>
                            <p>If there is a character/word limit, we mist tell the user. We must also say how many characters/words have been used.</p>
                        </section>
                    </section>
                    <section>
                        <h2>Date inputs</h2>
                        <p>We have two types of date input, a date picker and a memorable date field.</p>
                        <p>When we're asking a user for a memorable date, like a date of brith, we should use seperate text fields rather than a date picker. We also provide an example above the inputs.</p>
                        <p>When asking for recent past or upcoming dates, we use a calendar date picker, as it's useful for the user to be able to see the date, month and year.</p>
                        <section>
                            <form method="get" role="form memorable-date-input">
                                <MemorableDateInputContainer
                                    onChangeHandler={() => {}}
                                    heading='Memorable dates'
                                    description="For example, 23 7 1968"
                                />
                            </form>
                        </section>
                    </section>
                    <section>
                        <h2>Other elements</h2>
                        <section>
                            <form method="get" role="form address-input">
                                {<AddressPicker
                                    header="Address input"
                                    description="A user can use this component to select an address. The postcode search will search inside Stockport only and if the addres isn't inside Stockport the user can click manual search and enter each field separately."
                                    handleChange={this.onChangeHandler.bind(this)}
                                />}
                            </form>
                        </section>
                        <section>
                            <h3>My Account validation</h3>
                            <p>My Account signing up and logging in validation is slightly different. It allows us to provide a more detailed explanation of what information we need a user to input.</p>
                        </section>
                        <section>
                            <h3>Currency Input</h3>
                            <p>The currency input allows users to focus on the amount they are entering - without the need to input a pound sign. The input is narrow to reflect the information due to be input.</p>
                        </section>
                    </section>
                </article>
                <Aside/>
            </main>
        ) 
    } 
}

export default Inputs