import React from 'react'
import MainContainer from './MainContainer'

const NextMeds = ({title1}) => {
  return (
    <MainContainer title1={title1} height1={'300px'}>
        <div className='text-center p-3 rounded my-2 bgc'>
            <h2 style={{color:'white'}}>NOTHING PRESCRIBED</h2>
        </div>
    </MainContainer>
  )
}

export default NextMeds
