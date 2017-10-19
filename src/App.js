import React, {Component} from 'react'
import IngredientDashboard from './IngredientDashboard'
import Header from './Header'


class App extends Component {
    render() {
        return (
          <div>  
            <Header />
            <IngredientDashboard />    
          </div>
          
        )
    }
}

export default App
