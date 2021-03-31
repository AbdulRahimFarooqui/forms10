import React, { useState } from 'react';
import Stepper from './Stepper';
import './App.css'
import Home from './Home';

export default function App() {
    let [isSignup, setIsSignup] = useState(false)
    return (
        <div className="App">
            {!isSignup ? (
                <Home setIsSignup={setIsSignup} />
            ) : (
                <Stepper />
            )}
        </div>

    )
}