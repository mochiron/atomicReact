import React, { Component } from 'react'
import { Input, Types, ButtonInput } from 'react-bootstrap'

export default class extends Component {
  static styleguide = {
    index: '9.1',
    category: 'Forms',
    title: 'Forms',
    description: 'Test the inputs, form ',
    code: `
    <form>
      <Input type="text" label="Text" placeholder="Enter text" />
      <Input type="email" label="Email Address" placeholder="Enter email" />
      <Input type="password" label="Password" />
      <Input type="file" label="File" help="[Optional] Block level help text" />
      <Input type="checkbox" label="Checkbox" />
      <Input type="radio" label="Radio" checked readOnly />
      <Input type="select" label="Select" placeholder="select">
        <option value="select">select</option>
        <option value="other">...</option>
      </Input>
      <Input type="select" label="Multiple Select" multiple>
        <option value="select">select (multiple)</option>
        <option value="other">...</option>
      </Input>
      <Input type="textarea" label="Text Area" placeholder="textarea" />
      <ButtonInput value="Button Input" />
      <ButtonInput type="reset" value="Reset Button" />
      <ButtonInput type="submit" value="Submit Button" />
    </form>
    `
  }

  render () {
    return (
      <form>
        <Input type="text" label="Text" placeholder="Enter text" />
        <Input type="email" label="Email Address" placeholder="Enter email" />
        <Input type="password" label="Password" />
        <Input type="file" label="File" help="[Optional] Block level help text" />
        <Input type="checkbox" label="Checkbox" />
        <Input type="radio" label="Radio" checked readOnly />
        <Input type="select" label="Select" placeholder="select">
          <option value="select">select</option>
          <option value="other">...</option>
        </Input>
        <Input type="select" label="Multiple Select" multiple>
          <option value="select">select (multiple)</option>
          <option value="other">...</option>
        </Input>
        <Input type="textarea" label="Text Area" placeholder="textarea" />
        <ButtonInput value="Button Input" />
        <ButtonInput type="reset" value="Reset Button" />
        <ButtonInput type="submit" value="Submit Button" />
      </form>
    )
  }
}
