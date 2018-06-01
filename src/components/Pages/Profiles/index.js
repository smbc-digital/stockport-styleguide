import React, { Component } from 'react'
import Aside from '../../Elements/Aside'

class Profiles extends Component{
	constructor(props){
		super(props)
	}

	render(){
		return (
			<main id="content">
				<article className="with-aside">
					<h1>Profiles</h1>
				</article>
				<Aside/>
			</main>
		) 
	} 
}

export default Profiles