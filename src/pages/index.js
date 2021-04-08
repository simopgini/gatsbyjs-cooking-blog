import * as React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";

import ArticlePreview from "../components/ArticlePreview";

import "@fontsource/poppins";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";
import "@fontsource/poppins/900.css";

import "bootstrap/dist/css/bootstrap.css";
import "../style.css";
import Container from "../components/Container";

const BlogTitle = styled.h1`
  margin-bottom: 3rem;
  font-weight: bold;
  color: #663399;
`;

export const query = graphql`
  query {
    lasagnaImage: file(relativePath: { eq: "lasagna.jpeg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, height: 300)
      }
    }

    risottoImage: file(relativePath: { eq: "risotto.jpeg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, height: 300)
      }
    }

    hummusImage: file(relativePath: { eq: "hummus.jpeg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, height: 300)
      }
    }
  }
`;

function IndexPage(props) {
  return (
    <Container className="container">
      <Helmet>
        <title>Simona's Blog</title>
      </Helmet>
      <BlogTitle>Simona's Blog</BlogTitle>

      <ArticlePreview
        title="Ricetta lasagna di melanzane"
        text="In poche mosse preparete una lasagna di melanzane gustosissima, un primo piatto che farà leccare i baffi ai vostri ospiti!"
        link="/ricetta-lasagna-di-melanzane"
        image={props.data.lasagnaImage}
        alt="Lasagna di melanzane"
      />

      <ArticlePreview
        title="Risotto con carote e piselli: ricetta, trucchi e segreti"
        text="Vi mostreremo tutti i segreti per preparare un risotto veg cremoso e stupire tutti gli invitati."
        link="/risotto-con-carote-e-piselli"
        image={props.data.risottoImage}
        alt="Risotto con carote e piselli"
      />

      <ArticlePreview
        title="Ricetta hummus di ceci"
        text="Con pochi semplici trucchi, potete preparare un hummus fatto in casa super cremoso e sì, pensiamo davvero che sia meglio di quello acquistato in negozio!"
        link="/ricetta-hummus-ceci"
        image={props.data.hummusImage}
        alt="Hummus di ceci"
      />
    </Container>
  );
}

export default IndexPage;
