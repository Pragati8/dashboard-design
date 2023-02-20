import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardComp from './CardComp'
import Header from './Header'
import './Dashboard.css'
import Welcome from './Welcome';
import CareTeam from './CareTeam';
import NextMeds from './NextMeds';
import Rounds from './Rounds';
import Flags from './Flags';
import Weather from './Weather';
import Rehab from './Rehab';
import Footer from './Footer'
import LogoComp from './LogoComp';
import './Dashboard.css'

const dashboard = () => {
    // const t1 = [{name:'Vcharan',title:'Dr'}, {name:'Adam Pulmonologist', title: 'RY1'}];
    // const t2 = ["Nothing Prescribed"];
    // const t4 = ["Last: 7:15 PM", "Varun"];

  return (
        <Container className="" fluid style={{}}>
            <Row>
                <Col className='g-3'><Header title="Room 304-1" /></Col>
            </Row>

            <Row>
                <Col xs={2} className="g-3"><Flags title1={"FLAGS"}/></Col>
                <Col>
                    <Row>
                        <Col className="g-3"><CareTeam title1={"CARE TEAM"} /></Col>
                        <Col className="g-3"><NextMeds title1={"NEXT MEDS"} /></Col>
                        <Col className="g-3"><Weather title1={"WEATHER"} /></Col>
                    </Row>
                    <Row>
                        <Col className="g-3"><Rounds title1={"ROUNDS"} /></Col>
                        <Col className="g-3"><Welcome title1={"WELCOME"} /></Col>
                        <Col className="g-3"><Rehab title1={"REHAB"} /></Col>
                    </Row>
                </Col>
            </Row>

            <Row>
                <Col className='g-3'><Footer /></Col>
                <Col xs={1} className='g-3'><LogoComp /></Col>
            </Row>
        </Container>
  )
}

export default dashboard
