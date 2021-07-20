import styled from "styled-components";
import { CardWrapper } from "../../UI/Card/CardStyle";

export const UserListPanel = styled(CardWrapper)`
  width: 100%;
  //max-height: 50%;
  padding: 0;
  margin-top: 1rem;
  overflow-y: scroll;
  background: transparent;

  &::-webkit-scrollbar {
    width: 0;
  }
`;
