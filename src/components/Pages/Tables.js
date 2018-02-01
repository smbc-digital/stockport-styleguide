import React, { Component } from 'react'
import Aside from '../Elements/Aside'

class Tables extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <main>
                <article className="with-aside">
                    <h1>Tables</h1>
                    <p>Tables show tabular data in columns and rows.</p>
                    <section className="hide-on-mobile">
                        <h2 className="h3">My Account activity table</h2>
                        <p>The My Account reports table shows detailed information about a user's recent activity.</p>
                        <section className="data-table">
                            <header>
                                <div className="headings">
                                    <h2>Recent activity</h2>
                                    <p>Showing report activity from the last 30 days</p>
                                </div>
                                <div className="call-to-action">
                                    <button className="button-inverted" href="#">View all activity</button>
                                </div>
                            </header>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Description</th>
                                        <th>Status</th>
                                        <th className="align-right">Last updated</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Street light located on Wellington Road South</td>
                                        <td><span className="status-open">Open</span></td>
                                        <td className="align-right">Yesterday</td>
                                        <td><i className="fa fa-angle-right"></i></td>
                                    </tr>
                                    <tr>
                                        <td>Pot hole located on Hill Road</td>
                                        <td><span className="status-open">Open</span></td>
                                        <td className="align-right">2 days ago</td>
                                        <td><i className="fa fa-angle-right"></i></td>
                                    </tr>
                                    <tr>
                                        <td>Street light located on Great Bridge Street</td>
                                        <td><span className="status-onhold">On hold</span></td>
                                        <td className="align-right">3 March 2017</td>
                                        <td><i className="fa fa-angle-right"></i></td>
                                    </tr>
                                    <tr>
                                        <td>Pot hole located on River Road</td>
                                        <td><span className="status-complete">Complete</span></td>
                                        <td className="align-right">1 March 2017</td>
                                        <td><i className="fa fa-angle-right"></i></td>
                                    </tr>
                                </tbody>
                            </table>
                        </section>
                    </section>
                    <section className="hide-on-tablet hide-on-desktop">
                            <h2 className="h3">My Account activity table</h2>
                            <p>The My Account reports table shows detailed information about a user's recent activity.</p>
                            <section className="data-table">
                                <header>
                                    <div className="headings">
                                        <h2>Recent activity</h2>
                                        <p>Showing report activity from the last 30 days</p>
                                    </div>
                                </header>
                                <section>
                                    <h3>Street light located on Wellington Road South</h3>
                                    <span className="status-open">Open</span>
                                    <p>Last updated yesterday</p>
                                </section>
                                <section>
                                    <h3>Pot hole located on River Street</h3>
                                    <span className="status-complete">Complete</span>
                                    <p>Last updated 8 November 2017</p>
                                </section>
                                <section>
                                    <h3>Blocked grid on Heathbank Road</h3>
                                    <span className="status-onhold">On hold</span>
                                    <p>Last updated 1 November 2017</p>
                                </section>
                                <footer>
                                    <button className="button-inverted" href="#">View all activity</button>
                                </footer>
                            </section>
                        </section>
                    <section>
                        <h2>Information table</h2>
                        <section className="data-table-striped hide-on-mobile">
                            <h3 className="sr-only">Council tax band charges</h3>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Council Tax evaluation band</th>
                                        <th>Range of values</th>
                                        <th className="align-right">Charge</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>A</td>
                                        <td>Up to £40,000</td>
                                        <td className="align-right">£1,162.67</td>
                                    </tr>
                                    <tr>
                                        <td>B</td>
                                        <td>£40,000 - £52,000</td>
                                        <td className="align-right">£1,356.45</td>
                                    </tr>
                                    <tr>
                                        <td>C</td>
                                        <td>£52,000 - £68,000</td>
                                        <td className="align-right">£1,550.23</td>
                                    </tr>
                                    <tr>
                                        <td>D</td>
                                        <td>£68,000 - £88,000</td>
                                        <td className="align-right">£1,744.02</td>
                                    </tr>
                                </tbody>
                            </table>
                        </section>
                        <section className="data-table-striped hide-on-tablet hide-on-desktop">
                            <h3 className="sr-only">Council tax band charges</h3>
                            <section>
                                <h4 className="sr-only">Council Tax band A charges</h4>
                                <table>
                                    <tr>
                                        <td className="heading">Council Tax evaluation band</td>
                                        <td>A</td>
                                    </tr>
                                    <tr>
                                        <td className="heading">Range of values</td>
                                        <td>Up to £40,000</td>
                                    </tr>
                                    <tr>
                                        <td className="heading">Charge</td>
                                        <td>£1,162.67</td>
                                    </tr>
                                </table>
                            </section>
                            <section>
                                <h4 className="sr-only">Council Tax band B charges</h4>
                                <table>
                                    <tr>
                                        <td className="heading">Council Tax evaluation band</td>
                                        <td>B</td>
                                    </tr>
                                    <tr>
                                        <td className="heading">Range of values</td>
                                        <td>£40,000 - £52,000</td>
                                    </tr>
                                    <tr>
                                        <td className="heading">Charge</td>
                                        <td>£1,356.45</td>
                                    </tr>
                                </table>
                            </section>
                            <section>
                                <h4 className="sr-only">Council Tax band C charges</h4>
                                <table>
                                    <tr>
                                        <td className="heading">Council Tax evaluation band</td>
                                        <td>C</td>
                                    </tr>
                                    <tr>
                                        <td className="heading">Range of values</td>
                                        <td>£52,000 - £68,000</td>
                                    </tr>
                                    <tr>
                                        <td className="heading">Charge</td>
                                        <td>£1,550.23</td>
                                    </tr>
                                </table>
                            </section>
                            <section>
                                <h4 className="sr-only">Council Tax band D charges</h4>
                                <table>
                                    <tr>
                                        <td className="heading">Council Tax evaluation band</td>
                                        <td>D</td>
                                    </tr>
                                    <tr>
                                        <td className="heading">Range of values</td>
                                        <td>£68,000 - £88,000</td>
                                    </tr>
                                    <tr>
                                        <td className="heading">Charge</td>
                                        <td>£1,744.02</td>
                                    </tr>
                                </table>
                            </section>
                        </section>
                    </section>
                </article>
                <Aside/>
            </main>
        ) 
    } 
}

export default Tables