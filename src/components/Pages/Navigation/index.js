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
				</article>
				<Aside/>
			</main>
		) 
	} 
}

export default Navigation