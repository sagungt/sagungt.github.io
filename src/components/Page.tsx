import { ReactNode } from "react";
import styled from "styled-components";

interface Props {
  zIndex: number;
  color: string;
}

interface HasChild extends Props {
  children: ReactNode;
}

const PagesContainer = styled.div`
  background-color: ${(props: Props) => props.color};
  z-index: ${(props: Props) => props.zIndex};
  position: absolute;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Page = ({ zIndex, color, children }: HasChild) => {
  return (
    <>
      <PagesContainer zIndex={zIndex} color={color}>
        {children}
      </PagesContainer>
    </>
  );
};
export default Page;
