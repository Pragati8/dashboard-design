import React from 'react'
import MainContainer from './MainContainer'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { WiCloudyWindy } from "react-icons/wi";

const Welcome = ({title1}) => {
  return (
    <MainContainer title1={title1} height1={'300px'}>
        <div className='p-3 rounded my-2 bgc' style={{height: '230px'}}>
            <Row>
                <Col xs={4}><div style={{fontSize: '70px', color: 'white', fontWeight: 'bold'}}>88</div></Col>
                <Col><WiCloudyWindy style={{fontSize: '100px', color: 'white'}} /></Col>
            </Row>
            <Row>
                <Col><div style={{fontSize: '20px', color: 'white', fontWeight: 'bold'}}>As of 12:12 PM <br /> Feb 17, 2023 </div></Col>
            </Row>
        </div>
    </MainContainer>
  )
}

export default Welcome
