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
import Footer from './Footer'
import LogoComp from './LogoComp';

const dashboard = () => {
    // const t1 = [{name:'Vcharan',title:'Dr'}, {name:'Adam Pulmonologist', title: 'RY1'}];
    // const t2 = ["Nothing Prescribed"];
    // const t4 = ["Last: 7:15 PM", "Varun"];

  return (
    <div>
        <Container fluid>
            <Row>
                <Col><Header title="Room 304-1" /></Col>
            </Row>

            <Row>
                <Col xs={2}><Flags title1={"FLAGS"}/></Col>
                <Col>
                    <Row>
                        <Col><CareTeam title1={"CARE TEAM"} /></Col>
                        <Col><NextMeds title1={"NEXT MEDS"} /></Col>
                        <Col><Weather title1={"WEATHER"} /></Col>
                    </Row>
                    <Row>
                        <Col><Rounds title1={"ROUNDS"} /></Col>
                        <Col><Welcome title1={"WELCOME"} /></Col>
                        <Col><Col><div className='main-card'><CardComp title="REHAB" c={""} /></div></Col></Col>
                    </Row>
                </Col>
            </Row>

            <footer style={{marginTop: '180px'}}>
            <Row>
                <Col><Footer /></Col>
                <Col xs={1}><LogoComp /></Col>
            </Row>
            </footer>
        </Container>
    </div>
  )
}

export default dashboard
