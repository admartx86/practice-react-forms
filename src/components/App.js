import React, { Component } from "react";
import { UncontrolledLoginForm } from "./UncontrolledLoginForm";
import { ControlledLoginForm1 } from "./ControlledLoginForm1";
import { ControlledLoginForm2 } from "./ControlledLoginForm2";
import { PracticeForm } from "./PracticeForm";
class App extends Component {
    render() {
        return(
            <div>
                <h1>React Form Practice</h1>
                <h2>Uncontrolled Login Form</h2>
                <UncontrolledLoginForm/>
                <h2>Controlled Login Form 1</h2>
                <ControlledLoginForm1/>
                <h2>Controlled Login Form 2</h2>
                <ControlledLoginForm2/>
                <h2>Practice Form</h2>
                <PracticeForm/>
            </div>
        )
    }
}

export default App;