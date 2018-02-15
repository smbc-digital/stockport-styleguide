import React, {Component} from 'react'

export class Footer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            hideSocialLinks: this.props.hideSocialLinks ? this.props.hideSocialLinks : false
        }
    }

    render() {
        return (
            <footer>
                {this.state.hideSocialLinks &&
                    <ul className="mobile-social-links">
                        <li><a href="#" className="facebook"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#" className="twitter"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#" className="youtube"><i className="fa fa-youtube"></i></a></li>
                        <li><a href="#" className="instagram"><i className="fa fa-instagram"></i></a></li>
                    </ul>
                }
                <div className="center-wrapper">
                    <div id="footer-logo">
                        <a href="http://www.stockport.gov.uk">Stockport Metropolitan Borough Council Homepage</a>
                    </div>
                    <ul className="footer-links">
                        <li><a href="#">Contact us</a></li>
                        <li><a href="#">Cookies</a></li>                    
                        <li><a href="#">Data protection</a></li>
                        <li><a href="#">Freedom of information</a></li>                    
                        <li><a href="#">Feedback</a></li>
                        <li><a href="#">Style guide</a></li>
                    </ul>
                    {this.state.hideSocialLinks && 
                        <ul className="social-links">
                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fa fa-youtube"></i></a></li>
                            <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                        </ul>
                    }
                </div>
                <div className="footer-copyright">
                    <div className="center-wrapper">
                        <p><i className="fa fa-copyright"></i>&nbsp;{(new Date().getFullYear())} Stockport Metropolitan Borough Council</p>
                        <a href="#">Built by the Digital Team in Stockport</a>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer