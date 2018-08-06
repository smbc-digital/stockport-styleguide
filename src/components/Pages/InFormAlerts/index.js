import React, { Component } from 'react'
import Aside from '../../Elements/Aside'
import CodeExample from '../../Elements/CodeExample'
import { AlertForm } from 'smbc-react-components'

class InFormAlerts extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<main id="content">
				<article className="with-aside">
					<h1>In-form alerts</h1>
					<p>In-form alerts are used in forms to give users either <strong>additional information</strong> or a <strong>warning message</strong> about a question or an answer in a form. Dividers seperate the in-form alert from the questions on the form.</p>
					<section>
						<h2>Information alert</h2>
						<CodeExample>
							<AlertForm
								level='information'
								content="I'm a sentence on <strong>one line</strong> within an in-form alert."
							/>
						</CodeExample>
						<CodeExample>
							<AlertForm
								level='information'
								content="I'm some body text that gives the user some additional information about a question or an answer in a form."
							/>
						</CodeExample>
					</section>
					<section>
						<h2>Warning alerts</h2>
						<CodeExample>
							<AlertForm
								level='warning'
								content="I'm some body text that gives the user a warning message about a question or an answer in a form. This example shows what the alert should look like when it goes onto four lines."
							/>
						</CodeExample>
						<CodeExample>
							<AlertForm
								level='warning'
								content="The sort code and account number don’t match. Check your details and try again"
							/>
						</CodeExample>
					</section>
				</article>
				<Aside />
			</main>
		)
	}
}

export default InFormAlerts