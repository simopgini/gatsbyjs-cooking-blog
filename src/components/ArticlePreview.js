import * as React from "react";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import VioletLink from "./VioletLink";

const Title = styled.h3`
  font-weight: 600;
  margin-bottom: 14px;
`;

const Text = styled.p`
  margin-bottom: 0.5rem;
  color: #666666;
`;

const Container = styled.div`
  margin-bottom: 1.5rem;
`;

const Image = styled(GatsbyImage)`
  margin-bottom: 20px;
  width: 100%;
`;

function ArticlePreview(props) {
  return (
    <Container>
      <Title>{props.title}</Title>
      <Image image={getImage(props.image)} alt={props.alt} />

      <Text>{props.text}</Text>
      <VioletLink to={props.link}>
        Scopri la ricetta{" "}
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
        </svg>
      </VioletLink>
    </Container>
  );
}

export default ArticlePreview;
