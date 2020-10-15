import React, { Component } from "react"
import Input from "./Input"
import style from 'style.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      disabled: true,
      value: 'Text'
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState(
      prevState => {
        value = this.state.value
      }
    )

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
              <div className="container">
                {`<Input helperText="Some interesting text" />`}
                <Input
                  label="Label"
                  helperText="Some interesting text"
                  paragraph="Some interesting text"
                  placeholder="placeholder"
                />
              </div>
              <div className="container">
                {`<Input helperText="Some interesting text" error />`}
                <Input
                  label="Label"
                  helperText="Some interesting text" error
                  paragraph="Some interesting text"
                  placeholder="placeholder"
                />
              </div>
            </div>

            <div className="wrapper">
              <div className="container">
                {`<Input startIcon />`}
                <Input
                  label="Label"
                  startIcon="phone"
                  placeholder="placeholder"
                />
              </div>

              <div className="container">
                {`<Input endIcon />`}
                <Input
                  label="Label"
                  endIcon="padlock"
                  placeholder="placeholder"
                />
              </div>
            </div>

            {`<Input value="text" />`}
            <Input
              label="Label"
              onChange={this.handleChange}
              value={this.state.value}
            />

            <div className="wrapper">
              <div className="container">
                {`<Input size="sm" />`}
                <Input
                  label="Label"
                  size="sm"
                  placeholder="placeholder"
                />
              </div>
              <div className="container">
                {`<Input size="md" />`}
                <Input
                  label="Label"
                  size="md"
                  placeholder="placeholder"
                />
              </div>
            </div>
            <div>
              {`<Input size="fullWidth" />`}
              <Input
                label="Label"
                size="fullWidth"
                onChange={this.handleChange}
                value={this.state.value}
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
      </main >
    )
  }
}
export default App