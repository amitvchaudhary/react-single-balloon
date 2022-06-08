# react-single-balloon

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/react-single-balloon.svg)](https://www.npmjs.com/package/react-single-balloon) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-single-balloon
```

## Features

- Supports any color in the balloon
- Control transparency of the balloon
- Custom height/width (size) of the balloon
- Single click pop (hanle the event in parent component and play the burst sound of your choice)
- Built with Typescript

## Demo
 [Demo](https://amitvchaudhary.github.io/react-single-balloon/)

## Example
[![Edit react-floating-balloons-basic-example](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/dank-pond-ppl0nk?file=/src/App.tsx)

## Usage

```tsx
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
```
### Props

| Name        | Type                                   | Required | Options | Default | Description                                              |
| ----------- | -------------------------------------- | -------- | -------- | -------- | ---------------------------------------------------------|
| size    | `number`                             | `false`   | `10, 20, 35, 400` | `20`  | The height and width of the balloon. |
| color       | `string`                               | `false` | `yellow`, `blue`, `#EA18B4` | `red`  | Any valid color of the balloon. |
| loop     | `boolean`                             | `false`  | `true` or `false` | `true` | Should loop or hang on the top. |
| opacity     | `number`                             | `false`  | `0 ... 1` | `1` | Transparency of the balloon. |
| onPop | `Function` | `false` | | | Single click event on ballon |
| children | `React.ReactNode` | | | | Any valid HTML code. e.g, You can pass the text to be shown inside the balloon. It will be centered. Make sure the text is smaller than the size of the balloon. 
##

## License

MIT © [amitvchaudhary](https://github.com/amitvchaudhary)
