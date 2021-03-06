import React, {Component} from 'react'
import { Switch, Route } from 'react-router'
import '../favicon.ico'
import Home from './Pages/Home'
import Colours from './Pages/Colours'
import Typography from './Pages/Typography'
import Navigation from './Pages/Navigation'
import Buttons from './Pages/Buttons'
import FormElements from './Pages/FormElements'
import Alerts from './Pages/Alerts'
import Tables from './Pages/Tables'
import Profiles from './Pages/Profiles'
import Headers from './Pages/Headers'
import Icons from './Pages/Icons'
import Header from './Elements/Header'
import Footer from './Elements/Footer'
import Promotions from './Pages/Promotions'
import InFormAlerts from './Pages/InFormAlerts'
import { ErrorPage } from 'smbc-react-components'

class App extends Component{

	render(){
		return(
			<React.Fragment>
				<Header />
				<Switch>
					<Route exact path="/" component={Home}/>
					<Route path="/colours" component={Colours}/>
					<Route path="/typography" component={Typography}/>
					<Route path="/navigation" component={Navigation}/>
					<Route path="/buttons" component={Buttons}/>
					<Route path="/form-elements" component={FormElements}/>
					<Route path="/alerts" component={Alerts}/>
					<Route path='/inform-alerts' component={InFormAlerts} />
					<Route path="/tables" component={Tables}/>
					<Route path="/profiles" component={Profiles}/>
					<Route path="/icons" component={Icons}/>
					<Route path="/promotions" component={Promotions}/>
					<Route path="/headers" component={Headers}/>
					<Route render={(props) => (<ErrorPage {...props} errorCode={404} />)}/>
				</Switch>
				<Footer/>
			</React.Fragment>
		)
	}
}

export default App