import React from 'react'
import MainContainer from './MainContainer'

const Flags = ({title1}) => {
    const obj = [
      {name:"COVID", bgc: "pink", c: "white"},
      {name:"MEN1", bgc: "white", c: "black"},
      {name:"BDC TEST", bgc: "green", c: "white"},
      {name:"TESTBH", bgc: "lightpink", c: "black"}]
    // const t1 = ["COVID", "MEN1", "BDC TEST", "TESTBH"];
    // const color1 = ["pink", "white", "green", "peach"]
  return (
    <MainContainer title1={title1}>
        {
                obj.map((ele) => {
                    return(
                        <div className='p-3 rounded my-2 bgc' style={{backgroundColor: ele.bgc, color: ele.c}}>
                                <h3>{ele.name}</h3>
                        </div>
                    )
                })
            }
    </MainContainer>
  )
}

export default Flags