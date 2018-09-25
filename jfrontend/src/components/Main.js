import React, {Component} from "react";
import { Nav, NavItem, NavLink, Container, Row, Col} from 'reactstrap';
import Cards from "./Cards";

class Main extends Component {

  createCard = (this.props.data.map((list, i) => {
      return (
        <Cards list={list} key={i}/>
      )
    })
  )


  render() {
    return (
      <main>
          <Container>
            <Row>
              <Col sm="3" className="Main-nav">
                <Nav vertical className="text-center">
                  <p>Product Categories</p>
                  <NavItem>
                    <NavLink className="Main-nav-link" href="#">Snacks</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="Main-nav-link" href="#">Drinks</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="Main-nav-link" href="#">Specials</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="Main-nav-link" href="#">Contact</NavLink>
                  </NavItem>
                </Nav>
              </Col>
              <Col sm="9" className="bg-warning">
                <Container>
                  <Row>
                    {this.createCard}
                  </Row>
                </Container>
              </Col>
            </Row>
          </Container>
      </main>
    )
  }
}

export default Main;