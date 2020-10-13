import React, { Component } from "react"
import Input from "./Input"
import style from 'style.css'

class App extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <main>
                <form>
                    <div>
                        <Input
                            paragraph="<Input />"
                            placeholder="placeholder"
                        />
                        <Input
                            paragraph="<Input error />"
                            placeholder="placeholder"
                        />
                    </div>
                </form>
            </main>
        )
    }

}
export default App