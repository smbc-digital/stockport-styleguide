import React, { Component } from 'react'
import Aside from '../../Elements/Aside'
import AlertContainer from '../../Elements/Alert'
import AlertFullWidthContainer from '../../Elements/AlertFullWidth'
import AlertInlineContainer from '../../Elements/AlertInline'

class Alerts extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <main>
                <article className="with-aside">
                    <h1>Alerts</h1>
                    <p>Alerts keep users informed of important and sometimes time sensitive changes.</p>
                    <section>
                        <h2>Dismissable in page alerts</h2>
                        <AlertContainer
                            level="warning"
                            heading="This is a warning alert"
                            content='We’ll use this to tell you about something that’s quite important. It has 20px spacing on the top and bottom and consists of a H3 heading and body text.'
                            enableH3='true'
                        />
                        <AlertContainer
                            level="information"
                            heading="This is an information alert"
                            content='We’ll use this to give you useful information. It has 20px spacing on the top and bottom and consists of a H3 heading and body text.'
                            enableH3='true'
                        />
                        <AlertContainer
                            level="error"
                            heading="This is an error alert"
                            content='We’ll use this to tell you that something has gone wrong. It has 20px spacing on the top and bottom and consists of a H3 heading and body text.'
                            enableH3='true'
                        />
                        <AlertContainer
                            level="success"
                            heading="This is a success alert"
                            content='We’ll use this to tell you how great you’ve done! It has 20px spacing on the top and bottom and consists of a H3 heading and body text.'
                            enableH3='true'
                        />
                    </section>
                    <section>
                        <h2>Full width homepage/showcase alerts</h2>
                        <AlertFullWidthContainer
                            level='warning'
                            heading='This is a warning alert'
                            content='It has 20px between the heading and body and at the top and bottom of the content.'
                        />
                        <AlertFullWidthContainer
                            level='information'
                            heading='This is an information alert'
                            content='It has 20px between the heading and body and at the top and bottom of the content.'
                        />
                        <AlertFullWidthContainer
                            level='error'
                            heading='This is an error alert'
                            content='It has 20px between the heading and body and at the top and bottom of the content.'
                        />
                        <AlertFullWidthContainer
                            level='success'
                            heading='This is a success alert'
                            content='It has 20px between the heading and body and at the top and bottom of the content.'
                        />
                    </section>
                    <section>
                        <h2>Inline alerts</h2>
                        <p>Inline alerts allow content designers to draw out important information in the body of an article section.</p>
                        <AlertInlineContainer
                            heading="Hello! I'm an inline alert heading"
                            content="I’m some body text that adds a bit more information to the alert. There’s 20px between the heading and the body and 20px between the content and top and bottom of the alert box."
                        />
                    </section>
                </article>
                <Aside/>
            </main>
        )
    }
}

export default Alerts