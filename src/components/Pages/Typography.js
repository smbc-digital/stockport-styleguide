import React, { Component } from 'react'
import Aside from '../Elements/Aside'

class Typography extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <main>
                <article id="content" className="with-aside">
                    <h1>Typography</h1>
                    <section>
                        <h2>Our fonts</h2>
                        <section className="with-border-bottom">
                            <h3>Noto sans</h3>
                            <p>Noto sans is an open source sans serif typeface created for eligibility in UI design.</p>
                            <p>The typeface is designed by Google and aims to make the wen more beautiful across all platforms regardless of language it is used in.</p>
                            <p>The font is sans serif and is used widley accross Stockport.gov.uk</p>
                            <div className="font-display noto-sans">
                                <span>Aa</span>
                                <div className="alphabet">
                                    <p>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</p>
                                    <p>a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
                                </div>
                            </div>
                        </section>
                        <section className="with-border-bottom">
                            <h3>Source sans pro</h3>
                            <p>Source sans pro is an open source sans seriftypeface that is easily readable across all devices.</p>
                            <p>The font is inspired by twentieth century American gothic design, with a clean and friendly simplicity.</p>
                            <p>The font is used predominantely for headings across Stockport.gov.uk</p>
                            <div className="font-display source-sans-pro">
                                <span>Aa</span>
                                <div className="alphabet">
                                    <p>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</p>
                                    <p>a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
                                </div>
                            </div>
                        </section>
                    </section>
                    <section className="heading-display">
                        <h2>Headings</h2>
                        <section>
                            <h1>Hey, i'm an h1</h1>
                            <h2>Hey, i'm an h2</h2>
                            <h3>Hey, i'm an h3</h3>
                            <h4>Hey, i'm an h4</h4>
                            <p>Hey, i'm body text and i appear absolutely everywhere!</p>
                            <a href="#">Hey, i'm a link to some amazing content</a>
                        </section>
                    </section>
                </article>
                <Aside/>
            </main>
        ) 
    } 
}

export default Typography