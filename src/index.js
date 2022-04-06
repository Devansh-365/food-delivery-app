import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { BrowserRouter as Router } from "react-router-dom"

import App from './app'
import { StateProvider } from './context/StateProvider'
import { initialStage } from './context/initialStage'
import reducer from './context/reducer'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Router>
        <StateProvider initialStage={initialStage} reducer={reducer} >
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </StateProvider>
    </Router>
);
