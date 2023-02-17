import React from 'react'
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import DateTime from './DateTime';
import './Header.css'

const Header = (props) => {
    const variant = 'dark'
  return (
    <div>
      <Card bg={variant} text={'light'} key={variant} className="m-1" style={{height: '90px'}}>
        <div className='flex-container'>
            <div><h1>DFB</h1></div>
            <div className='flex-container2'>
                <div><h1>Room 304-1</h1></div>
                <div><h4>Extension 8070</h4></div>
            </div>
            <div><h3><DateTime /></h3></div>
        </div>
      </Card>
    </div>
  )
}

export default Header
