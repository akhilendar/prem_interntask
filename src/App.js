import {BrowserRouter, Switch, Route} from 'react-router-dom'

import LandingPage from './components/LandingPage'
import BMICalculator from './components/BMICalculator'

const App = () => {
  return(
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={LandingPage} />  
          <Route path='/bmi-calculator' component={BMICalculator}/>
        </Switch>
      </BrowserRouter>
  )
}
export default App