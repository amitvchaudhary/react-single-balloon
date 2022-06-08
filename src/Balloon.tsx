import * as React from 'react'
import ReactDOM from 'react-dom'
import mojs from 'mo-js'
import { StyledBalloon } from './Balloon.styles'
import { random } from './utils'

interface Props {
  children?: React.ReactNode
  size?: number
  color?: string
  onPop?: Function | any
  loop?: boolean
  opacity?: number
}

const Balloon = (props: Props) => {
  const {
    size = 20,
    color = 'red',
    loop = false,
    opacity = 1,
    onPop,
    children
  } = props

  const [show, setShow] = React.useState(true)
  const delay = 0;
  const duration = 10 + random(1, 5)
  const left = random(10, 70) // random init left value to fly

  const burst = (e: any) => {
    let t = e.currentTarget
    const burst = new mojs.Burst({
      radiusX: 30,
      radiusY: 50,
			parent: t,
			count: 10,
			className: 'show',
			children: {
				fill: [color],
				angle: { 90: 180 },
				delay: 'stagger(0, 25)',
				shape: [ 'circle', 'polygon', 'line' ],
			}
    })
    burst.replay()
    t.style.visibility = 'hidden';
    setTimeout(() => {
      setShow(false)
    }, 2000)
  }

  const handleOnPop = (e: any) => {
    burst(e);
    onPop();
  }
  return ReactDOM.createPortal(
    show && (
      <StyledBalloon
        onClick={handleOnPop}
        height={size}
        width={size}
        opacity={opacity}
        animate={{
          delay,
          duration,
          rotate: random(20, 25),
          left,
          loop
        }}
        style={{backgroundColor: color}}
        show={show}
      >
          <div className='string'></div>
          <div className='msg'>{children}</div>
      </StyledBalloon>
    ),
    document.body
  )
}

export default Balloon
