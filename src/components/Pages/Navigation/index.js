import React, { Component } from 'react'
import Aside from '../../Elements/Aside'

class Navigation extends Component{
	constructor(props){
		super(props)
	}

	render(){
		return (
			<main id="content">
				<article className="with-aside button-display">
					<h1>Navigation</h1>
					<fieldset>
						<legend className="sr-only">Appointment dates</legend>
						<div id="AppointmentDateTime"><div className="appointment-radio-container"><input data-val="true" data-val-required="The AppointmentDateTime field is required." id="AppointmentDateTime-2018-08-01" name="AppointmentDateTime" value="2018-08-01" type="radio"/><label htmlFor="AppointmentDateTime-2018-08-01">Wednesday, 1 August 2018</label></div><div className="appointment-radio-container"><input id="AppointmentDateTime-2018-08-02" name="AppointmentDateTime" value="2018-08-02" type="radio"/><label htmlFor="AppointmentDateTime-2018-08-02">Thursday, 2 August 2018</label></div><div className="appointment-radio-container"><input id="AppointmentDateTime-2018-08-03" name="AppointmentDateTime" value="2018-08-03" type="radio"/><label htmlFor="AppointmentDateTime-2018-08-03">Friday, 3 August 2018</label></div><div className="appointment-radio-container"><input id="AppointmentDateTime-2018-08-06" name="AppointmentDateTime" value="2018-08-06" type="radio"/><label htmlFor="AppointmentDateTime-2018-08-06">Monday, 6 August 2018</label></div><span aria-atomic="true" className="field-validation-valid" data-valmsg-htmlFor="AppointmentDateTime" data-valmsg-replace="true" role="alert"></span></div>
					</fieldset>
				</article>
				<Aside/>
			</main>
		) 
	} 
}

export default Navigation