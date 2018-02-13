import React from 'react'

class AlertInline extends React.Component {
    render() {
        return(
            <section className="inline-alert">
                <h2>{this.props.heading}</h2>
                <p dangerouslySetInnerHTML={{__html: this.props.content}}/>
            </section>
        )
    }
}

export default AlertInline