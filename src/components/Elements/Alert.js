import React from 'react'

class Alert extends React.Component {
    constructor(props) {
        super(props)
        this.level = "alert-" + this.props.level
        this.icon = "fa fa-"
        switch (this.props.level) {
            case "success":
                this.icon += "check-circle"
                break
            case "information":
                this.icon += "info-circle"
                break
            case "error":
                this.icon += "exclamation-circle"
                break
            case "warning":
                this.icon += "exclamation-triangle"
                break
            default:
                this.icon += "exclamation-triangle"
        }
    }
    
    render() {
        return(
            <section className={this.level}>
                <i className={this.icon}></i>
                <div className="content">
                    <h2>{this.props.heading}</h2>
                    <p dangerouslySetInnerHTML={{__html: this.props.content}}/>
                </div>
                <a href="#" aria-label="close"><i className="fa fa-times"></i></a>
            </section>
        )
    }
}

export default Alert