import React from 'react'
import AlertInline from './AlertInline'

class AlertInlineContainer extends React.Component {
	render() {
		return(
			<AlertInline heading={this.props.heading} content={this.props.content} />
		)
	}
}

export default AlertInlineContainer