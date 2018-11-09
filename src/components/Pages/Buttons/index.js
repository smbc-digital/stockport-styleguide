import React, { Component } from 'react'
import Aside from '../../Elements/Aside'
import CodeExample from '../../Elements/CodeExample'

class Buttons extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<main id="content">
				<article className="with-aside">
					<h1>Buttons</h1>
					<p>Buttons highlight key calls to action across the website; ranging from downloading a document to logging into My Account.</p>
					<p>If you want to link different pages together, text links should be used instead.</p>
					<CodeExample>
						<button className="button-primary" href="#">I'm a primary button</button>
					</CodeExample>
					<CodeExample>
						<button className="button-secondary" href="#">I'm a secondary button</button>
					</CodeExample>
					<CodeExample>
						<button className="button-inverted" href="#">I'm an inverted button</button>
					</CodeExample>
					<div style={{backgroundColor: '#055c58'}}>
						<CodeExample>
							<button className="button-tertiary" href="#">I'm a tertiary button</button>
						</CodeExample>
						<CodeExample>
							<button className="button-underlined">I'm an underlined button</button>
						</CodeExample>
					</div>
					<CodeExample>
						<button className="button-primary" href="#" disabled>I'm a disabled button</button>
					</CodeExample>
					<CodeExample>
						<button className="button-login" href="#">My Account login button</button>
					</CodeExample>
					<CodeExample>
						<button className="button-primary button-loading is-loading" href="#" >I'm a button at loading state</button>
					</CodeExample>
					<CodeExample>
						<a className='anchor-with-icon' href='#'><i className="fa fa-plus-square fa-2x"></i>I'm an anchor with an icon</a>
					</CodeExample>
				</article>
				<Aside />
			</main>
		)
	}
}

export default Buttons