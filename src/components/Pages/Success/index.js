import React, { Component } from 'react'
import Aside from '../../Elements/Aside'

class Success extends Component{
	constructor(props){
		super(props)
	}

	render(){
		return (
			<main id="content">
				<article className="with-aside">
					<h1>Sucess</h1>
					<section>
						<h2>Successful Reporting</h2>
						<div className="notification success">
							<h1>Report a blocked grid</h1>
							<div className="si-icon-bordered">
								<i className="fa fa-5x fa-check"></i>
							</div>
							<h2>Thank you for reporting a blocked grid</h2>
						</div>
						<div className="tracking-reference">
							<h3>Your report number is</h3>
							<h1>10101010101</h1>
						</div>
					</section>
				</article>
				<Aside/>
			</main>
		) 
	} 
}

export default Success