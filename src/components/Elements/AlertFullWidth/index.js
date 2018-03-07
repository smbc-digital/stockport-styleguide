import React from 'react'
import AlertFullWidth from './AlertFullWidth'

class AlertFullWidthContainer extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			level: 'alert-' + this.props.level + '-fullwidth',
			icon: this.setIconLevel(this.props.level),
			isHidden: false
		}
	}
    
	setIconLevel(level) {
		switch (level) {
		case 'success':
			return 'fa fa-check-circle'
		case 'information':
			return 'fa fa-info-circle'
		case 'error':
			return 'fa fa-exclamation-circle'
		case 'warning':
			return 'fa fa-exclamation-triangle'
		default:
			return 'fa fa-exclamation-triangle'
		}
	}
    
	onClick(event) {
		event.preventDefault()
		this.setState({ isHidden: !this.state.isHidden })
	}

	render() {
		return(
			this.state.isHidden == false && <AlertFullWidth level={this.state.level} icon={this.state.icon} heading={this.props.heading} content={this.props.content} onClick={this.onClick.bind(this)} />
		)
	}
}

export default AlertFullWidthContainer