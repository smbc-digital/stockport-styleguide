import React from 'react'

class AlertFormContainer extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			level: 'alert-form-' + this.props.level,
			icon: this.setIconLevel(this.props.level),
			isHidden: false
		}
	}
    
	setIconLevel(level) {
		switch (level) {
		case 'information':
			return 'fa fa-info-circle'
		case 'warning':
			return 'fa fa-exclamation-circle'
		default:
			return 'fa fa-info-circle'
		}
	}

	onClick(event) {
		event.preventDefault()
		this.setState({ isHidden: !this.state.isHidden })
	}

	render() {
		return(
			this.state.isHidden == false && 
				<section className={this.state.level}>
					<i className={this.state.icon}></i>
					<p dangerouslySetInnerHTML={{ __html: this.props.content }} />
				</section>
		)
	}
}

export default AlertFormContainer