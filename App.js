import React, { Component } from "react"
import Input from "./Input"
import style from 'style.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      disabled: true,
    }
  }
  handleClick() {
    this.setState({ disabled: this.state.disabled })
  }

  render() {
    return (
      <main>
        <h1>Input</h1>
        <form>
          <div>
            {`<Input />`}
            <Input
              label="Label"
              default
              placeholder="placeholder"
            />
            {`<Input error />`}
            <Input
              label="Label"
              error
              placeholder="placeholder"
            />
            {`<Input disabled />`}
            <Input
              label="Label"
              disabled={this.state.disabled}
              placeholder="placeholder"
            />

            <div className="wrapper">
              {`<Input helperText="Some interesting text" />`}
              <Input
                label="Label"
                helperText="Some interesting text"
                paragraph="Some interesting text"
                placeholder="placeholder"
              />
              {`<Input helperText="Some interesting text" error />`}
              <Input
                label="Label"
                helperText="Some interesting text" error
                paragraph="Some interesting text"
                placeholder="placeholder"
              />
            </div>

            <div className="wrapper">
              {`<Input startIcon />`}
              <Input
                label="Label"
                startIcon="phone"
                placeholder="placeholder"
              />
              {`<Input endIcon />`}
              <Input
                label="Label"
                endIcon="padlock"
                placeholder="placeholder"
              />
            </div>

            {`<Input value="text" />`}
            <Input
              label="Label"
              value="Text"
            />

            <div className="wrapper">
              {`<Input size="sm" />`}
              <Input
                label="Label"
                size="sm"
                placeholder="placeholder"
              />
              {`<Input size="md" />`}
              <Input
                label="Label"
                size="md"
                placeholder="placeholder"
              />
              {`<Input size="fullWidth" />`}
              <Input
                label="Label"
                size="fullWidth"
                value="Text"
              />
            </div>
            <div>
              {`<Input multiline row="4" />`}
              <Input
                label="Label"
                row="4"
                placeholder="placeholder"
              />
            </div>
          </div>
        </form>
      </main>
    )
  }
}
export default App