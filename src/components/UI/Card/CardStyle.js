import styled from "styled-components";

export const CardWrapper = styled.div`
  background: ${(props) => (props.color ? props.color : "white")};
  box-shadow: ${(props) =>
    props.noshadow ? 0 : "0 2px 8px rgba(255, 255, 255, 0.3)"};
  border-radius: 8px;
  padding: 1rem;
  margin-top: ${(props) => props.marginTop && props.marginTop};
  width: ${(props) => (props.fit ? "fit-content" : "100%")};
  position: ${(props) => props.relative && "relative"};

  overflow: ${(props) => props.overflow && "hidden"};

  &:first-child {
    margin: 0;
  }
`;
