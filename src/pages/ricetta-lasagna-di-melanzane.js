import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import VioletLink from "../components/VioletLink";
import Container from "../components/Container";

const Title = styled.h1`
  margin-bottom: 3rem;
  font-weight: bold;
  color: #663399;
`;

const InfoContainer = styled.div`
  display: flex;
  background: #eeeeee;
  padding: 20px;
  border-radius: 4px;
  text-align: center;
`;

const InfoBox = styled.div`
  flex: 1;
`;

const ListItem = styled.li`
  margin-bottom: 6px;
`;

const ArticleLinks = styled.div`
  margin-bottom: 50px;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
`;

const Image = styled(GatsbyImage)`
  margin-bottom: 30px;
  width: 100%;
`;

export const query = graphql`
  query {
    file(relativePath: { eq: "lasagna.jpeg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, height: 500)
      }
    }
  }
`;

function LasagnaArticle(props) {
  return (
    <Container className="container">
      <Title>Ricetta lasagna di melanzane</Title>
      <Image image={getImage(props.data.file)} alt="Lasagna di melanzane" />
      <article>
        <h2>Introduzione</h2>
        <p>
          Le <b>lasagne melanzane e mozzarella </b>sono un primo piatto al forno
          molto gustoso. In poche parole (e in poche mosse) preparerete una
          lasagna di melanzane deliziosa, un primo piatto che farà leccare i
          baffi ai vostri ospiti!
        </p>

        <InfoContainer>
          <InfoBox>
            <b>Preparazione</b>
            <br /> 30 minuti
          </InfoBox>
          <InfoBox>
            <b>Cottura</b>
            <br /> 40 minuti
          </InfoBox>
          <InfoBox>
            <b>Difficoltà</b>
            <br /> bassa
          </InfoBox>
          <InfoBox>
            <b>Porzioni</b>
            <br /> 6
          </InfoBox>
        </InfoContainer>
        <br />

        <h2>Ingredienti</h2>

        <p>Ecco la lista degli ingredienti:</p>
        <ul>
          <ListItem>600 g di lasagne</ListItem>
          <ListItem>1700 g di melanzane</ListItem>
          <ListItem>1500 ml di passata</ListItem>
          <ListItem>700 g di mozzarella</ListItem>
          <ListItem>parmigiano</ListItem>
          <ListItem>olio extravergine</ListItem>
          <ListItem>sale</ListItem>
        </ul>

        <h2>Preparazione</h2>
        <p>
          Tagliate le melanzane a fette omogenee di 1 cm e pometele su carta
          forno. Preparate il sugo, facendo un soffritto di cipolla per
          insaporirlo ancora di più.
        </p>

        <p>
          Prendete una pirofila, cospargete dell'olio di oliva sul fondo e
          assemblate le lasagne in quest’ordine: strato di lasagne, melanzane,
          salsa di pomodoro, parmigiano e mozzarella a pezzi.
        </p>
        <p>
          Continuate in quest’ordine fino ad esaurimento degli ingredienti.
          Terminate con uno strato di lasagne, poca salsa di pomodoro e infine
          con una spolverata abbondante di parmigiano.
        </p>
        <p>
          Infornate a 200°C per 40 minuti circa, fate riposare per dieci minuti
          e servite.
        </p>
      </article>

      <ArticleLinks>
        <VioletLink to="/">Indietro</VioletLink>
        <VioletLink to="/risotto-con-carote-e-piselli">
          Prossima ricetta
        </VioletLink>
      </ArticleLinks>
    </Container>
  );
}

export default LasagnaArticle;
