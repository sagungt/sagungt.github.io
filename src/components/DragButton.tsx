import styled, { keyframes } from "styled-components";
import { ForwardedRef, forwardRef } from "react";
import { MouseEvent, TouchEvent } from "react";
import Logo from "../logo.svg";

interface Props {
  onMouseDown?: (event: MouseEvent | TouchEvent) => void;
}

const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.5);
  }

  70% {
    box-shadow: 0 0 0 20px rgba(0, 0, 0, 0);
  }

  100% {
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
`;

const Drag = styled.div`
  transform: translate(-50%, -50%);
  animation: ${pulse} 2s infinite;
  background-color: aliceblue;
  transition: opacity 0.3s;
  border-radius: 100%;
  position: absolute;
  height: 100px;
  cursor: move;
  opacity: 0.7;
  width: 100px;
  z-index: 10;
  left: 50%;
  top: 50%;

  &:hover {
    opacity: 1;
  }
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
`;

const DragButton = forwardRef<HTMLDivElement, Props>(
  ({ onMouseDown }: Props, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <>
        <Drag onMouseDown={onMouseDown} ref={ref}>
          <Image src={Logo} alt="My Logo" />
        </Drag>
      </>
    );
  }
);

export default DragButton;
