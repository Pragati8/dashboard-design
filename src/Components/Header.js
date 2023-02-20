import React from 'react'
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import DateTime from './DateTime';
import './Header.css'

const Header = (props) => {
    const variant = 'dark'
  return (
    <div className='px-2' style={{height: '10vh', backgroundColor: 'black', color: 'white', borderRadius: '10px'}}>
        <div className='flex-container'>
            <div><h1>DFB</h1></div>
            <div className='flex-container2'>
                <div><h1>Room 304-1</h1></div>
                <div><h4>Extension 8070</h4></div>
            </div>
            <div><h3><DateTime /></h3></div>
        </div>
    </div>
  )
}

export default Header
