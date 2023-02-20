import React from 'react'
import MainContainer from './MainContainer';

const CareTeam = ({title1}) => {
    const t1 = [{name:'Vcharan',title:'Dr'}, {name:'Adam Pulmonologist', title: 'RY1'}, {name:'Vcharan',title:'Dr'}, {name:'Adam Pulmonologist', title: 'RY1'}];
  return (
        <MainContainer className='scroll1' title1={title1} height1={'37vh'} style={{overflow: 'auto'}}>
            {
                t1.map((ele) => {
                    return(
                        <div className='p-3 rounded my-2 bgc'>
                                <h2>{ele.name}</h2>
                                <h3>{ele.title}</h3>
                        </div>
                    )
                })
            }
        </MainContainer>
  )
}

export default CareTeam
