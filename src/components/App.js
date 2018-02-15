import React, {Component} from 'react'
import { Switch, Route } from 'react-router'
import Home from './Pages/Home'
import Colours from './Pages/Colours'
import Typography from './Pages/Typography'
import Navigation from './Pages/Navigation'
import Buttons from './Pages/Buttons'
import FormElements from './Pages/FormElements'
import Alerts from './Pages/Alerts'
import Tables from './Pages/Tables'
import Profiles from './Pages/Profiles'
import Icons from './Pages/Icons'
import Header from './Elements/Header'
import Footer from './Elements/Footer'

class App extends Component{

    render(){
        return([
            <Header/>,
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/colours" component={Colours}/>
                <Route path="/typography" component={Typography}/>
                <Route path="/navigation" component={Navigation}/>
                <Route path="/buttons" component={Buttons}/>
                <Route path="/formelements" component={FormElements}/>
                <Route path="/alerts" component={Alerts}/>
                <Route path="/tables" component={Tables}/>
                <Route path="/profiles" component={Profiles}/>
                <Route path="/icons" component={Icons}/>
            </Switch>,
            <Footer/>
        ])
    }
}

export default App