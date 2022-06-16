import { MouseEvent } from "react";
import styled from "styled-components";

interface Props {
  onClickHandler?: (event: MouseEvent) => void;
  hash?: string;
}

const NavButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0 5px;
  justify-content: center;
  margin-top: 10px;
  max-width: 960px;
  width: 100%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const NavButton = styled.button`
  text-align: center;
  background: #fbca1f;
  font-family: inherit;
  padding: 0.6em 1.3em;
  font-size: 18px;
  border: 3px solid black;
  border-radius: 0.4em;
  box-shadow: 0.1em 0.1em;
  margin: 4px;
  cursor: pointer;
  text-decoration: none;
  color: #000;
  display: inline-block;

  &:hover {
    transform: translate(-0.05em, -0.05em);
    box-shadow: 0.15em 0.15em;
  }

  &:active {
    transform: translate(0.05em, 0.05em);
    box-shadow: 0.05em 0.05em;
  }

  @media (max-width: 768px) {
    padding: 0.6em 0.8em;
  }

  &:disabled {
    cursor: initial;
    transform: translate(0.05em, 0.05em);
    box-shadow: 0.05em 0.05em;
    opacity: 0.7;
  }
`;

const Navigation = ({ hash, onClickHandler }: Props) => {
  return (
    <>
      <NavButtonContainer>
        <NavButton
          type="button"
          onClick={onClickHandler}
          data-position="center"
          disabled={hash === "#home"}
        >
          <i
            className="fa-solid fa-house"
            style={{ pointerEvents: "none" }}
          ></i>
        </NavButton>
        <NavButton
          type="button"
          onClick={onClickHandler}
          data-position="bottomright"
          disabled={hash === "#profile"}
        >
          <i className="fa-solid fa-user" style={{ pointerEvents: "none" }}></i>
        </NavButton>
        <NavButton
          type="button"
          onClick={onClickHandler}
          data-position="bottomleft"
          disabled={hash === "#projects"}
        >
          <i
            className="fa-brands fa-react"
            style={{ pointerEvents: "none" }}
          ></i>
        </NavButton>
        <NavButton
          type="button"
          onClick={onClickHandler}
          data-position="topright"
          disabled={hash === "#blog"}
        >
          <i
            className="fa-solid fa-paper-plane"
            style={{ pointerEvents: "none" }}
          ></i>
        </NavButton>
        <NavButton
          type="button"
          onClick={onClickHandler}
          data-position="topleft"
          disabled={hash === "#contact"}
        >
          <i className="fa-solid fa-at" style={{ pointerEvents: "none" }}></i>
        </NavButton>
      </NavButtonContainer>
    </>
  );
};

export default Navigation;
