import { ForwardedRef, forwardRef, ReactNode } from "react";
import styled from "styled-components";

interface Props {
  height: string;
  width: string;
  isActive: boolean;
}

interface HasChild extends Props {
  children: ReactNode;
}

const StyledField = styled.div`
  height: ${(props: Props) => props.height};
  width: ${(props: Props) => props.width};
  position: absolute;
  overflow: ${(props: Props) => (props.isActive ? "auto" : "hidden")};

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

const Field = forwardRef<HTMLDivElement, HasChild>(
  (
    { width, height, children, isActive }: HasChild,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <>
        <StyledField
          width={width}
          height={height}
          ref={ref}
          isActive={isActive}
        >
          {children}
        </StyledField>
      </>
    );
  }
);

export default Field;
