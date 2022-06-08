import React from 'react'

import { Balloon } from 'react-single-balloon'

const App = () => {
  let audio = new Audio(
    'https://soundbible.com/mp3/Balloon%20Popping-SoundBible.com-1247261379.mp3'
  )

  const handleOnPop = () => {
    audio.play()
  }

  return (
    <>
      <Balloon onPop={handleOnPop} loop={true} color='#FFC0CB' size={60}>
        One
      </Balloon>
      <Balloon
        onPop={handleOnPop}
        loop={true}
        color='blue'
        size={80}
        opacity={0.7}
      >
        Two
      </Balloon>
      <Balloon onPop={handleOnPop} loop={true} color='#EA18B4' size={90}>
        <div>Three</div>
      </Balloon>
      <Balloon onPop={handleOnPop} loop={true} size={120} opacity={0.4}>
        Four
      </Balloon>
      <Balloon onPop={handleOnPop} loop={true} color='#18EA1E' size={140}>
        Five
      </Balloon>
    </>
  )
}

export default App
