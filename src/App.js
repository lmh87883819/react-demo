import React from "react";
import { Provider } from 'react-redux'

import configureStore from './store/ConfigureStore'
import App from './pages'
const store = configureStore()

class Index extends React.Component {
  
	render () {
		return (
			<Provider store={store}>
                <App />
            </Provider>
		  )
	}
}

export default Index;
