import React, {Component} from "react";
import { Nav, NavItem, NavLink, Container, Button, ButtonGroup, Row, Col} from 'reactstrap';
import Cards from "./Cards";
import Categories from "./Categories";

function Main(props) {

  const createCard = props.data.map((list, i) => {
    console.log('message',props.data)
    return (
      <Cards list={list} key={i}/>
    )
  })
  
  const createCategories = props.categories.map((type, i) =>  {
    return  (
      <Categories category={type}
                  key={i}
                  selectCategory={props.selectCategory} />
    )
  })
  
    return (
      <main>
          <Container>
            <Row>
              <Col sm="3" className="Main-nav">
                <ButtonGroup vertical>
                  <p>Product Categories</p>
                  {createCategories}
                  <Button onClick={(event) => props.getData()}>All</Button>
                  <Button>Contact</Button>
                </ButtonGroup>
              </Col>
              <Col sm="9" className="bg-warning">
                <Container>
                  <Row>
                    {createCard}
                  </Row>
                </Container>
              </Col>
            </Row>
          </Container>
      </main>
    )
  }


export default Main;