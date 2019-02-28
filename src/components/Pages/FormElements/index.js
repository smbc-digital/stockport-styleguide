import React, { Component } from 'react'
import Aside from '../../Elements/Aside'
import CodeExample from '../../Elements/CodeExample'
import { RadioInputsContainer, CheckboxInputsContainer, MemorableDateInputContainer, TextInputContainer, AddressPicker, SelectInputContainer, TextAreaInputContainer, SortcodeInput, AccountNumberInput, SelectableButtonList } from 'smbc-react-components'
import 'react-dates/initialize'
import { SingleDatePicker } from 'react-dates'

class Inputs extends Component {
	constructor(props) {
		super(props)
		this.radioInputs = [
			{
				'id': 'radio-inline-1',
				'label': 'This value over one line',
				'name': 'MeatChoice',
				'value': ''
			},
			{
				'id': 'radio-inline-2',
				'label': 'This value should span over two lines.',
				'name': 'MeatChoice',
				'value': ''
			},
			{
				'id': 'radio-inline-3',
				'label': 'Over multiple lines. This value should span multiple lines. Over multiple lines. This value should span multiple lines.',
				'name': 'MeatChoice',
				'value': ''
			},
			{
				'id': 'radio-inline-4',
				'label': 'This input is disabled',
				'name': 'MeatChoice',
				'value': '',
				'disabled': 'true'
			}
		]

		this.radioInputsWithAdditionalInputs = [
			{
				'id': 'radio-meat-1',
				'label': 'Radio 1',
				'name': 'RadioMeat',
				'value': 'test',
				renderIfChecked: () =>
					<TextInputContainer
						label="Text fields"
						id="cheese-1"
						type="text"
						optional={true}
						onChangeHandler={() => { }}
					/>
			},
			{
				'id': 'radio-meat-2',
				'label': 'Radio 2',
				'name': 'RadioMeat',
				'value': 'test2'
			},
			{
				'id': 'radio-meat-3',
				'label': 'Radio 3',
				'name': 'RadioMeat',
				'value': 'test3'
			}
		]

		this.selectWithAdditionalInputs =
		[
			{
				value: '1',
				name: 'Option A'
			},
			{ 
				value: '2',
				name: 'option C'
			},
			{
				value:'other',
				name:'Other'
			}
		]

		this.checkboxInputs = [
			{
				'id': 'checkbox-inline-1',
				'label': 'This value one line',
				'name': 'CheeseChoice',
				'value': ''
			},
			{
				'id': 'checkbox-inline-2',
				'label': 'This value should span over two lines.',
				'name': 'CheeseChoice',
				'value': ''
			},
			{
				'id': 'checkbox-inline-3',
				'label': 'Over three lines. This value should span over three lines.',
				'name': 'CheeseChoice',
				'value': ''
			},
			{
				'id': 'checkbox-inline-4',
				'label': 'This input is disabled',
				'name': 'CheeseChoice',
				'value': '',
				'disabled': 'true'
			}
		]

		this.selectableButtonOptions = [
			{
				date: 'Wednesday 27 February 2019',
				times: [
					{
						startTime: '8:45am',
						endTime: '11:00am'
					},
					{
						startTime: '12:45pm',
						endTime: '15:00pm'
					}
				]
			},
			{
				date: 'Wednesday 6 March 2019',
				times: [
					{
						startTime: '8:45am',
						endTime: '11:00am'
					}
				]
			}
		]

		this.state = {
			date: null,
			focused: false,
			dateValidationMessage: '',
			dropDownValue: ''
		}
	}

	onChange(event) {
		return event
	}

	onChangeDropdown(event) {
		this.setState({
			dropDownValue: event.target.value
		})
	}

	onChangeDate(date) {
		let validationMessage = date !== null ? '' : 'Date is invalid'
		this.setState({ date: date, isValid: date !== null, dateValidationMessage: validationMessage })
	}

	onButtonClick = (event, item) => {
		event.preventDefault()
		this.props.context.selectedAppointment = item
		const copyOfState = Object.assign({}, this.state)
		copyOfState.isSelectedAppointment = true
		this.setState(copyOfState)
	}

	render() {
		return (
			<main id="content">
				<article className="with-aside">
					<section>
						<h1>Form Elements</h1>
						<p>Form inputs are a vital way of allowing users to enter information on a page.</p>
					</section>
					<section>
						<h2>Selections</h2>
						<section>
							<form method="get" role="form radio-button">
								<CodeExample>
									<RadioInputsContainer
										header='Radio Buttons'
										description='Radio buttons allow users to make a single selection from a list of possible choices.'
										legend='Meat choice'
										options={this.radioInputs}
										onChange={this.onChange.bind(this)}
									/>
								</CodeExample>
							</form>
						</section>
						<section>
							<form method="get" role="form radio-button">
								<CodeExample>
									<RadioInputsContainer
										header='Radio Buttons focused within'
										description='Radio buttons with additonal inputs.'
										legend='Meat choice with cheese choice'
										options={this.radioInputsWithAdditionalInputs}
										onChange={this.onChange.bind(this)}
									/>
								</CodeExample>
							</form>
						</section>
						<section>
							<form method="get" role="form checkboxes">
								<CodeExample>
									<CheckboxInputsContainer
										header='Checkboxes'
										description='Checkboxes allow users to make one or more selections from a list.'
										legend='Cheese choice'
										options={this.checkboxInputs}
										onChange={this.onChange.bind(this)}
									/>
								</CodeExample>
							</form>
						</section>
						<section>
							<form method="get" role="form select-input">
								<CodeExample>
									<SelectInputContainer
										description="Drop downs allow a user to select one options from a list; these are founn most commonly in address finders. Before using a drop down we should think about whether radio buttons are more suitable."
										id="style-guide-select"
										name="style-guide-select"
										placeholder="Select an address..."
										onChange={this.onChange.bind(this)}
										label="Drop downs"
										options={[{ value: '1', name: 'first option' }, { value: '2', name: 'second option' }]}
									/>
								</CodeExample>
							</form>
							<form method="get" role="form select-input-other">
								<CodeExample>
									<SelectInputContainer
										description="Drop downs allow a user to select one options from a list; If other is selected a text box is shown"
										id="style-guide-select"
										name="style-guide-select"
										placeholder="Select an option..."
										onChange={this.onChangeDropdown.bind(this)}
										label="Drop downs"										
										options={[{ value: '1', name: 'Option A' }, { value: '2', name: 'Option B' }, { value: '3', name: 'Option C' }, {value:'other', name:'Other will bring a text field beneath'}]}
									/>
								</CodeExample>
								{ this.state.dropDownValue == 'other' && 
									<TextInputContainer
										label="Further Details"
										id="further-details"
										type="text"
										optional={false}
										onChangeHandler={() => { }}
									/> }
							</form>
						</section>
						<section>
							<form>
								<h3>Selectable button list</h3>
								<p>This component works in a similar way to radio buttons and can be used for things like appointment selection</p>
								<CodeExample>
									<SelectableButtonList
										heading="Select an appointment"
										enableH2={true}
										buttonList={this.selectableButtonOptions}
										onButtonClick={this.onButtonClick.bind(this)}
										colour="radio-list"
										inline={true}
										showMore={true}
										onClick={() => {}}
									/>
								</CodeExample>
								<button className="button-primary">Next step</button>
							</form>
						</section>
					</section>
					<section>
						<h2>Text inputs</h2>
						<section>
							<form method="get" role="form text-input">
								<CodeExample>
									<TextInputContainer
										label="Text fields"
										id="fullname"
										type="text"
										optional={true}
										description="Text inputs allow users to enter information. There are different types of text inputs, which provide slightly different experiences for users."
										onChangeHandler={() => { }}
									/>
								</CodeExample>
							</form>
						</section>
						<section>
							<form method="get" role="form text-input">
								<CodeExample>
									<TextInputContainer
										label="Text field validation"
										id="fullname"
										type="text"
										optional={false}
										description="Validation allows us to show users where something hasn't gone quite right and highlights the exact point where they need to make a change - so they're not left guessing."
										onChangeHandler={() => { }}
									/>
								</CodeExample>
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
								<CodeExample>
									<MemorableDateInputContainer
										onChange={() => { }}
										heading='Memorable dates'
										description="For example, 23 7 1968"
									/>
								</CodeExample>
								<hr />
							</form>
						</section>
						<section>
							<form method="get" role="form date-input">
								<label>Single date input</label>
								<div className={this.state.dateValidationMessage.length > 0 ? 'input-date-picker invalid' : 'input-date-picker'}>
									<CodeExample>
										<SingleDatePicker
											date={this.state.date}
											onDateChange={this.onChangeDate.bind(this)}
											focused={this.state.focused}
											onFocusChange={({ focused }) => this.setState({ focused })}
											numberOfMonths={1}
											displayFormat="DD/MM/YYYY"
											placeholder="dd/mm/yyyy"
											hideKeyboardShortcutsPanel={true}
											isOutsideRange={() => false}
										/>
									</CodeExample>
									{this.state.dateValidationMessage.length > 0 && <p className='input-error-content'>{this.state.dateValidationMessage}</p>}
								</div>
							</form>
						</section>
					</section>
					<section>
						<h2>Other elements</h2>
						<section>
							<form method="get" role="form address-input" className='address-finder'>
								<CodeExample>
									<AddressPicker
										enableH2={true}
										automaticLabel="Enter the company&#39;s postcode"
										automaticDescription="If it&#39;s not a Stockport postcode, please enter the address manually below."
										manualLabel='Enter the company&#39;s address'
										onChange={() => { }}
									/>
								</CodeExample>
							</form>
						</section>
						<section>
							<h3>My Account validation</h3>
							<p>My Account signing up and logging in validation is slightly different. It allows us to provide a more detailed explanation of what information we need a user to input.</p>
							<form method="get" role="form my-account-validation">
								<CodeExample>
									<TextInputContainer
										label="Text field validation"
										id="fullname"
										type="text"
										optional={false}
										description="Validation allows us to show users where something hasn't gone quite right and highlights the exact point where they need to make a change - so they're not left guessing."
										onChangeHandler={() => { }}
										useMyAccountValidation={false}
									/>
								</CodeExample>
							</form>
						</section>
						<section>
							<h3>Currency Input</h3>
							<p>The currency input allows users to focus on the amount they are entering - without the need to input a pound sign. The input is narrow to reflect the information due to be input.</p>
						</section>
						<section>
							<h3>Text Area Input</h3>
							<p> TextArea input allows users to enter information. There are different types of text inputs, which provide slightly different experiences for users. This input provides a bigger character limit. </p>
							<form method="get" role="form my-account-validation">
								<CodeExample>
									<TextAreaInputContainer
										maxLength={10}
										onChange={this.onChange.bind(this)}
										id='testId'
										label='TextArea input label'
										value='This a textArea input label'
									/>
								</CodeExample>
							</form>
						</section>
						<section>
							<h3>Sort code Input</h3>
							<p> Sort code allows users to enter a 6 digit card number.</p>
							<form method="get" role="form my-account-validation">
								<CodeExample>
									<SortcodeInput
										onChange={() => { }}
									/>
								</CodeExample>
							</form>
						</section>
						<section>
							<h3>Account number Input</h3>
							<p> Account number allows users to enter an 8 digit card number.</p>
							<form method="get" role="form my-account-validation">
								<CodeExample>
									<AccountNumberInput
										onChange={() => { }}
									/>
								</CodeExample>
							</form>
						</section>
						<section>
							<form>
								<h1>Submit your supporting documents</h1>
								<div className="upload-file-list" style={{ display: 'block' }}>
									<div className="grid-100">
										<i className="fa fa-1x fa-file"></i>
										<span>test2.txt</span>
										<i className="fa fa-1x fa-times" tabIndex="0"></i>
									</div>
								</div>
								<div className="upload-file-input">
									<label className="button-primary label-file">
										Browse for files
										<input id="Files" name="Files" type="File"></input>
									</label>
								</div>
								<button disabled="" id="submitFiles" type="submit" className="button-primary">Submit your documents</button>
							</form>
						</section>
						
					</section>
				</article>
				<Aside />
			</main>
		)
	}
}

export default Inputs