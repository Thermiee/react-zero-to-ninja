import React, { Component } from 'react'
import {
  Button,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  Carousel
} from 'react-bootstrap'
import mainLogo from './images/1.jpg'
import mainLog from './images/2.jpg'
import maingo from './images/3.jpg'

class App extends Component {
  render () {
    return (
      <div className="App">
        <Nav bsStyle="tabs" activeKey="1">
          <NavItem eventKey="1" href="/home">
            NavItem 1 content
          </NavItem>
          <NavItem eventKey="2" title="Item">
            NavItem 2 content
          </NavItem>
          <NavItem eventKey="3" disabled>
            NavItem 3 content
          </NavItem>
          <NavDropdown eventKey="4" title="Dropdown" id="nav-dropdown">
            <MenuItem eventKey="4.1">Action</MenuItem>
            <MenuItem eventKey="4.2">Another action</MenuItem>
            <MenuItem eventKey="4.3">Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="4.4">Separated link</MenuItem>
          </NavDropdown>
        </Nav>

        <h1>React JS Bootstrap</h1>
        {/* Standard button */}
        <Button>Default</Button>

        {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
        <Button bsStyle="primary">Primary</Button>

        {/* Indicates a successful or positive action */}
        <Button bsStyle="success">Success</Button>

        {/* Contextual button for informational alert messages */}
        <Button bsStyle="info">Info</Button>

        {/* Indicates caution should be taken with this action */}
        <Button bsStyle="warning">Warning</Button>

        {/* Indicates a dangerous or potentially negative action */}
        <Button bsStyle="danger">Danger</Button>

        {/* Deemphasize a button by making it look like a link while maintaining button behavior */}
        <Button bsStyle="link">Link</Button>
        <br />

        <Carousel>
          <Carousel.Item>
            <img alt="300x300" src={mainLogo} />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Goals.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img alt="300x300" src={mainLog} />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Life is a Dream.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img alt="300x300" src={maingo} />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Dream Big.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    )
  }
}

export default App
