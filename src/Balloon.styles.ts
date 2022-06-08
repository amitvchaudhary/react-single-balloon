import styled, {keyframes} from "styled-components";
import { random } from "./utils";

const balloonsLeftUpKFAnimation = ({left, hangOnTop}: any) => {
  return keyframes`
  {
    0%{ 
      top: 100vh;
      left: ${`${left}vw`};
    }
    15%{ 
      top: ${`${random(70,80)}vh`};
      left: ${`${left-random(10,20)}vw`};
    }
    25%{
      top: ${`${random(45,55)}vh`};
      left: ${`${left+random(15,20)}vw`};
    }
    45%{
      top: ${`${random(25,40)}vh`};
      left: ${`${left-random(20,30)}vw`};
    }
    80%{
      top: ${`${random(5,15)}vh`};
      left: ${`${left+random(20,30)}vw`};
    }
    100%{
      top: ${`${hangOnTop ? random(-2, 1) : random(-60,-70)}vh`};
      left: ${`${hangOnTop ? random(0,50) : left-random(30,50)}vw`};
    }
  }
`
};
const balloonsRightUpKFAnimation = ({left, hangOnTop}: any) => {
  return keyframes`
  {
    0%{ 
      top: 100vh;
      left: ${`${left}vw`};
    }
    30%{ 
      top: ${`${random(60,70)}vh`};
      left: ${`${left-random(10,30)}vw`};
    }
    55%{
      top: ${`${random(30,40)}vh`};
      left: ${`${left+random(5,20)}vw`};
    }
    70%{
      top: ${`${random(10,20)}vh`};
      left: ${`${left-random(20,30)}vw`};
    }
    100%{
      top: ${`${hangOnTop ? random(-2, 1) : random(-60,-70)}vh`};
      left: ${`${hangOnTop ? random(0,50) : left+random(30,50)}vw`};
    }
  }
`
};

interface StyledBalloonProps {
  show: boolean,
  onClick: Function,
  height: number,
  width: number,
  opacity: number,
  animate: {
    delay: number,
    duration: number,
    rotate: number,
    left: number,
    loop: boolean
  }
}

export const StyledBalloon = styled.div<StyledBalloonProps>`
  display: ${props => props?.show ? 'block' : 'none'};
  visibility: ${props => props.show ? 'visible' : 'hidden'};
  opacity: ${props => props.opacity};
  cursor: pointer;
  left: ${props => `${props.animate.left}vw`};
  transition: transform 0.5s ease;
  z-index: 10;
  animation: ${props => props.animate.left > 50 ? balloonsRightUpKFAnimation(props.animate): balloonsLeftUpKFAnimation(props.animate)} ease-in-out ${props => props.animate.loop ? 'infinite' : '1'};
  animation-duration: ${props => `${props.animate.duration}s`};
  animation-delay ${props => `${props.animate.delay}s`};
  animation-fill-mode: ${props => props.animate.loop ? 'forwards' : 'none'};
  transform-origin:bottom center;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  border-radius: 100% 100% 15% 100%;
  margin: 0 0 0 25px;
  transform: rotateZ(45deg);
  position: fixed;
  &::before {
    content: "";
    width: 10%;
    height: 25%;
    background: radial-gradient(circle, rgba(255,255,255,.7) 0%, rgba(255,255,255,.1) 100%);
    position: absolute;
    left: 15%;
    top: 45%;
    border-radius: 100%;
  }
  &::after {
    content: "";
    width: 13%;
    height: 5%;
    background-color: inherit;
    position: absolute;
    left: 90%;
    top: 94%;
    border-radius: 22%;
    transform: rotateZ(-45deg);
  }
  .string {
    position: absolute;
    background-color: #e2e204;
    border-radius: 50%/100px 100px 0 0;
    width: ${props => props.width * 0.01}px;
    height: ${props => props.height * 0.6}px;
    transform: rotateZ(-45deg);
    top: 87%;
    left: 116%;
  }
  .msg {
    opacity: 1;
    color: #fff;
    font-family: cursive;
    position: absolute;
    top: 30%;
    left: 30%;
    transform: rotateZ(-45deg);
  }
  .show {
    display: block;
    visibility: visible;
  }
`;

