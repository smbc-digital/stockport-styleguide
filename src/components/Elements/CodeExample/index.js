import React, { Component } from 'react'
import ReactDOMServer from 'react-dom/server'
import pretty from 'pretty'
import Highlight from 'react-highlight'

class CodeExample extends Component{
	constructor(props){
		super(props)
		this.state = {
			showCode: false
		}
	}

	onClick() {
		this.setState({ showCode: !this.state.showCode })
	}

	render(){
		return (
			<div className="component">
				<i className="fa fa-code" onClick={this.onClick.bind(this)}>
					<span>Show code</span>
				</i>
				<div className={'example ' + (this.state.showCode ? 'show-code' : '')}>
					{this.props.children}
					<Highlight className={'html ' + (this.state.showCode ? 'fadein' : 'fadeout')}>
						{ pretty(ReactDOMServer.renderToStaticMarkup(this.props.children)) }
					</Highlight>
				</div>
			</div>
		) 
	} 
}

export default CodeExample