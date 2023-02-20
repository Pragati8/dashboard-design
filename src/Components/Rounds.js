import React from 'react'
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
// import { MdOutlinePersonAddAlt } from "react-icons/md";
import MainContainer from './MainContainer';
import { BsPerson } from "react-icons/bs";

const Rounds = ({title1}) => {
  return (
    <MainContainer title1={title1} height1={'37vh'}>
        <div className='rounded my-2 bgc'>
            <Row>
                <Col xs={3}><BsPerson style={{fontSize: '100px'}} /></Col>
                <Col>
                    <Row>
                        <Col><h3 style={{color: 'white', fontWeight: 'bold'}}>Last: 7:15 PM</h3></Col>
                    </Row> 
                    <Row>
                        <Col><h3 style={{color: 'white', fontWeight: 'bold'}}>Varun</h3></Col>
                    </Row>
                </Col>               
            </Row>
        </div>
    </MainContainer>
  )
}

export default Rounds