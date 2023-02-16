import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardComp from './CardComp'
import Header from './Header'
import './Dashboard.css'
import Welcome from './Welcome';
import CareTeam from './CareTeam';

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
                <Col xs={2}>main</Col>
                <Col>
                    <Row>
                        <Col><div className='main-card p-2'><CardComp title="CARE TEAM" c={<CareTeam />} /></div></Col>
                        <Col><div className='main-card'><CardComp title="NEXT MEDS" c={""} /></div></Col>
                        <Col><Col><div className='main-card'><CardComp title="WEATHER" c={""} /></div></Col></Col>
                    </Row>
                    <Row>
                        <Col><Col><div className='main-card'><CardComp title="ROUNDS" c={""} /></div></Col></Col>
                        <Col><Welcome title1={"Welcome"} /></Col>
                        <Col><Col><div className='main-card'><CardComp title="REHAB" c={""} /></div></Col></Col>
                    </Row>
                </Col>
            </Row>

            <Row>
                <Col>4-1</Col>
                <Col xs={2}>4-2</Col>
            </Row>
        </Container>
    </div>
  )
}

export default dashboard
