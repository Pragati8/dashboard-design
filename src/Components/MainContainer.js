import React from 'react'
import './Dashboard.css'

const MainContainer = ({children, title1}) => {
  return (
    <div className='main-card p-2'>
        <div style={{textAlign: 'center', borderBottom:'0', backgroundColor: 'black', borderRadius: '10px' }} className="text-white"><h2>{title1}</h2></div>

        {children}
    </div>
  )
}

export default MainContainer
