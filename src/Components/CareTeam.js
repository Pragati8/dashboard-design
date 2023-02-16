import React from 'react'

const CareTeam = () => {
    const t1 = [{name:'Vcharan',title:'Dr'}, {name:'Adam Pulmonologist', title: 'RY1'}];
  return (
    <div>
        {
            t1.map((ele) => {
                return(
                    <h1>{ele.name}</h1>
                )
            })
        }
    </div>
  )
}

export default CareTeam
