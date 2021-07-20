import styled from "styled-components";

export const ReUsableButton = styled.button`
  padding: 0.25rem 0.5rem;
  background: ${(props) => props.color && props.color};
  border: 0;
  border-radius: 4px;
  color: ${(props) => props.white && "white"};
`;
