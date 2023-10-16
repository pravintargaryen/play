import React from 'react'
import './index.css'


function App (){
 
  const[changeColors, setChangeColors] = React.useState({
    colors: ["#4285F4", "#DB4437", "#F4B400", "#0F9D58"],
    mouse: true
  })

  const array = changeColors.colors
  const randomIndex = Math.floor(Math.random() * array.length)
  const randomElement = array[randomIndex]
  
  const myStyle = {backgroundColor:randomElement}
    


  return (
    <div style={myStyle} onMouseMove={() => setChangeColors(prev => ({...prev, colors:prev.colors}))}>
      <img src='/google.png'></img>
    </div>
  )
}

export default App
