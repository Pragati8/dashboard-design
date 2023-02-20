import React from 'react'
import MainContainer from './MainContainer'

const Welcome = ({title1}) => {
  return (
    <MainContainer title1={title1} height1={'37vh'}>
        <div className='text-center p-3 rounded my-2 bgc' style={{height: '280px'}}>
            <h2 style={{color:'white'}}>Welcome baby</h2>
            <div style={{color:'#e55e76', fontSize: '70px', fontWeight: 'bold'}}>Railey</div>
        </div>
    </MainContainer>
  )
}

export default Welcome
