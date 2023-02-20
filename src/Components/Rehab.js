import React from 'react'
import MainContainer from './MainContainer'

const Rehab = ({title1}) => {
  return (
    <MainContainer className="scroll1" title1={title1} height1={'37vh'} style={{overflow: 'auto'}}>
        <div className='p-3 rounded my-2 bgc' style={{backgroundColor: '#fdf1a5'}}>
            <h3>PRECAUTIONS:</h3>
            <h4 style={{marginBottom:"-2px"}}>Left ARM:</h4>
            <span>WEIGHT BEARING AS TOLERATED</span>
            <br/>
            <div className='my-1'>
            <h4  style={{marginBottom:"-2px"}}>LEFT LEG</h4>
            <span>FULL WEIGHT BEARING</span>
            </div>
        </div>
        <div className='p-3 rounded my-2 bgc' style={{backgroundColor: '#99dae7d4'}}>
            <h3>PRECAUTIONS:</h3>
            <h4 style={{marginBottom:"-2px"}}>Left ARM:</h4>
            <span>WEIGHT BEARING AS TOLERATED</span>
            <br/>
            <div className='my-1'>
            <h4  style={{marginBottom:"-2px"}}>LEFT LEG</h4>
            <span>FULL WEIGHT BEARING</span>
            </div>
        </div>
    </MainContainer>
  )
}

export default Rehab
