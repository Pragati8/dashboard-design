import React from 'react'
import './MainContainer.css'

const MainContainer = ({children, title1, height1, style, className}) => {
  return (
    <div className={`main-card ${className}`} style={{height: height1, position: 'relative', ...style}}>
        <div style={{textAlign: 'center', borderBottom:'0', backgroundColor: 'black', borderRadius: '10px', position: 'sticky', top: '0px' }} className="text-white m-2"><h2>{title1}</h2></div>

        {children}
    </div>
  )
}

export default MainContainer
