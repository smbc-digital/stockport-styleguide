import React, { Component } from 'react'
import Aside from '../Elements/Aside'
import ColourBoxes from '../Elements/ColourBoxes'

class Colours extends Component{
    constructor(props){
        super(props)
        this.primaryColours = [
            {
                "Name": "Primary",
                "Class": "primary",
                "Hex": "#055c58"
            },
            {
                "Name": "Teal",
                "Class": "teal",
                "Hex": "#00b79b"
            },
            {
                "Name": "Teal darker",
                "Class": "teal-darker",
                "Hex": "#1a8c7a"
            },
            {
                "Name": "Off white",
                "Class": "off-white",
                "Hex": "#ebebeb"
            },
            {
                "Name": "White",
                "Class": "white",
                "Hex": "#ffffff"
            },
            {
                "Name": "Grey darkest",
                "Class": "grey-darkest",
                "Hex": "#333333"
            }
        ]
        this.secondaryColours = [
            {
                "Name": "Primary darkest",
                "Class": "primary-darkest",
                "Hex": "#092726"
            },
            {
                "Name": "Primary darker",
                "Class": "primary-darker",
                "Hex": "#1d3837"
            },
            {
                "Name": "Primary dark",
                "Class": "primary-dark",
                "Hex": "#124a47"
            },
            {
                "Name": "Primary light",
                "Class": "primary-light",
                "Hex": "#3a716e"
            },
            {
                "Name": "Primary pale",
                "Class": "primary-pale",
                "Hex": "#83aeac"
            },
            {
                "Name": "Green",
                "Class": "green",
                "Hex": "#15863a"
            },
            {
                "Name": "Soft blue",
                "Class": "soft-blue",
                "Hex": "#207eab"
            },
            {
                "Name": "Red",
                "Class": "red",
                "Hex": "#c83725"
            },
            {
                "Name": "Orange",
                "Class": "orange",
                "Hex": "#ef8a16"
            },
            {
                "Name": "Purple",
                "Class": "purple",
                "Hex": "#8e5572"
            },
            {
                "Name": "Grey dark",
                "Class": "grey-dark",
                "Hex": "#666666"
            }
        ]
        this.tertiaryColours = [
            {
                "Name": "Grey lightest",
                "Class": "grey-lightest",
                "Hex": "#e1e1e1"
            },
            {
                "Name": "Grey lighter",
                "Class": "grey-lighter",
                "Hex": "#cccccc"
            },
            {
                "Name": "Grey light",
                "Class": "grey-light",
                "Hex": "#bcbcbc"
            },
            {
                "Name": "Grey middle",
                "Class": "grey-middle",
                "Hex": "#999999"
            }
        ]
    }

    render(){
        return (
            <main>
                <article className="with-aside">
                    <section>
                        <h1>Colours</h1>
                        <p>Our colour palette is designed to support a wide range of visual styles that feel connected with one another.</p>
                        <p>The palette primary comprises shades of teal, which are intended to reflect the spiritual meaning of the
                            colour such as; trustworthiness, confidence and creative expression.</p>
                        <p>We have a simple colour palette, which aims to initiate clean design with a cleat hierachy of information.</p>
                    </section>
                    <section>
                        <h2>Primary colours</h2>
                        <ColourBoxes colours={this.primaryColours}/>
                    </section>
                    <section>
                        <h2>Secondary colours</h2>
                        <ColourBoxes colours={this.secondaryColours}/>
                    </section>
                    <section>
                        <h2>Tertiary colours</h2>
                        <ColourBoxes colours={this.tertiaryColours}/>
                    </section>
                </article>
                <Aside/>
            </main>
        ) 
    } 
}

export default Colours