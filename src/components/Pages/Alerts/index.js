import React, { Component } from 'react'
import Aside from '../../Elements/Aside'
import Alert from '../../Elements/Alert'
import AlertFullWidth from '../../Elements/AlertFullWidth'
import AlertInline from '../../Elements/AlertInline'

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
                        <Alert
                            level="warning"
                            heading="This is a warning alert"
                            content='The cost of Council Tax is increasing by 3.75% for the 2016-2017 tax year. you can vists our <a href="https://www.stockport.gov.uk/topic/council-tax">Council Tax pages</a> to find out more information.'
                        />
                        <Alert
                            level="information"
                            heading="This is an information alert"
                            content='The cost of Council Tax is increasing by 3.75% for the 2016-2017 tax year. you can vists our <a href="https://www.stockport.gov.uk/topic/council-tax">Council Tax pages</a> to find out more information.'
                        />
                        <Alert
                            level="error"
                            heading="This is an error alert"
                            content='The cost of Council Tax is increasing by 3.75% for the 2016-2017 tax year. you can vists our <a href="https://www.stockport.gov.uk/topic/council-tax">Council Tax pages</a> to find out more information.'
                        />
                        <Alert
                            level="success"
                            heading="This is a success alert"
                            content='The cost of Council Tax is increasing by 3.75% for the 2016-2017 tax year. you can vists our <a href="https://www.stockport.gov.uk/topic/council-tax">Council Tax pages</a> to find out more information.'
                        />
                    </section>
                    <section>
                        <h2>Full width homepage/showcase alerts</h2>
                        <AlertFullWidth
                            level="warning"
                            heading="This is a warning alert"
                            content="The world isn't ending, but this is still pretty important."
                        />
                        <AlertFullWidth
                            level="information"
                            heading="This is an information alert"
                            content="We think that you should read this because it could be useful."
                        />
                        <AlertFullWidth
                            level="error"
                            heading="This is an error alert"
                            content="This is a critical issue that needs addressing right this minute!"
                        />
                        <AlertFullWidth
                            level="success"
                            heading="This is a success alert"
                            content="You did really, really really great. Well done!"
                        />
                    </section>
                    <section>
                        <h2>Inline alerts</h2>
                        <p>Inline alerts allow content designers to draw out important information in the body of an article section.</p>
                        <AlertInline
                            heading="Hello! I'm an inline alert heading"
                            content="I'm some body text that adds a bit more information to the alert."
                        />
                    </section>
                </article>
                <Aside/>
            </main>
        )
    }
}

export default Alerts