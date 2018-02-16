import React from 'react'
import AlertFullWidth from './AlertFullWidth';

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
                break
            case 'information':
                return 'fa fa-info-circle'
                break
            case 'error':
                return 'fa fa-exclamation-circle'
                break
            case 'warning':
                return 'fa fa-exclamation-triangle'
                break
            default:
                return 'fa fa-exclamation-triangle'
        }
    }
    
    onClickHandler(event) {
        event.preventDefault();
        this.setState({ isHidden: !this.state.isHidden })
    }

    render() {
        return(
            this.state.isHidden == false && <AlertFullWidth level={this.state.level} icon={this.state.icon} heading={this.props.heading} content={this.props.content} onClickHandler={this.onClickHandler.bind(this)} />
        )
    }
}

export default AlertFullWidthContainer