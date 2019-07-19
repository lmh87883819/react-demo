import React from "react";
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/es/integration/react'

import configureStore from './store/ConfigureStore'
import App from './pages'

const { persistor, store } = configureStore()
const onBeforeLift = () => {
}

class Index extends React.Component {
  
	render () {
		return (
			<Provider store={store}>
				<PersistGate 
					loading={null}
					onBeforeLift={onBeforeLift}
					persistor={persistor}>
                	<App />
				</PersistGate>
            </Provider>
		  )
	}
}

export default Index;
