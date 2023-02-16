import React from 'react'
import MainContainer from './MainContainer'

const Welcome = ({title1}) => {
  return (
    <MainContainer title1={title1}>
        <div className='text-center p-3 rounded my-2 bgc'>
            <h2 style={{color:'white'}}>Welcome baby</h2>
            <div style={{color:'#cf5369', fontSize: '50px'}}><h1>Railey!</h1></div>
        </div>
    </MainContainer>
  )
}

export default Welcome
