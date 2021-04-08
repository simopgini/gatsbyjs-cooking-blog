import styled from "styled-components";
import { Link } from "gatsby";

const VioletLink = styled(Link)`
  color: #663399;
  text-decoration: none;
  transition: border 500ms;
  border-bottom: 1px solid transparent;

  &:hover {
    text-decoration: none;
    color: #663399;
    border-bottom: 1px solid #663399;
  }
`;

export default VioletLink;
