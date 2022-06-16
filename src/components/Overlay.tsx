import styled from "styled-components";
import {
  MouseEventHandler,
  HTMLAttributes,
  ForwardedRef,
  forwardRef,
} from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  onClickHandler?: MouseEventHandler<HTMLDivElement>;
  position?: string;
  zIndex?: number;
  title?: string;
}

const StyledOverlay = styled.div`
  transition: visibility 300ms linear, opacity 300ms linear;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  z-index: ${(props: Props) => props.zIndex};
  background: rgba(255, 255, 255, 0.1);
  -webkit-backdrop-filter: blur(2px);
  backdrop-filter: blur(2px);
  visibility: visible;
  position: absolute;
  overflow: hidden;
  height: inherit;
  cursor: pointer;
  width: inherit;
  opacity: 1;
  &:hover,
  &:active {
    & h1 {
      background-size: 100% 100%;
    }
  }
`;

const Title = styled.h1`
  ${(props: Props) => props.position}
  position: fixed;
  overflow: hidden;
  font-size: 2rem;
  text-decoration: none;
  background-image: linear-gradient(to right, #fbca1f 0, #fbca1f 100%);
  background-position: 0 -0.3em;
  background-size: 0 100%;
  background-repeat: no-repeat;
  transition: background 0.5s, transform 0.3s;
  &:hover,
  &:active {
    background-size: 100% 100%;
  }
`;

const Overlay = forwardRef<HTMLDivElement, Props>(
  (
    { zIndex, title, position, onClickHandler }: Props,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <>
        <StyledOverlay zIndex={zIndex} ref={ref} onClick={onClickHandler}>
          <Title position={position}>{title}</Title>
        </StyledOverlay>
      </>
    );
  }
);

export default Overlay;
