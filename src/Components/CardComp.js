import React from 'react';
import './title.css'
import './CardComp.css'

const CardComp = (props) => {
    const variant = 'dark' 
  return (
    <div className='rounded'>
        

        <div style={{textAlign: 'center', borderBottom:'0', backgroundColor: 'black', borderRadius: '10px' }} className="text-white"><h2>{props.title}</h2></div>

        {/* {
            props.t1.map((ele) => {
                return (
                    <div className='bgc rounded my-2 p-3'>
                        <h2>{ele.name?ele.name:ele}</h2>
                        <h4>{ele.title?ele.title:""}</h4>
                        
                    </div>
                )
            })
        } */}
        <div className='bgc rounded my-2 p-3'>
            {props.c}
        </div>
    </div>
  )
}

export default CardComp;
