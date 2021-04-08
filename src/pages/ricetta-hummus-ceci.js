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
    file(relativePath: { eq: "hummus.jpeg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, height: 500)
      }
    }
  }
`;

function HummusArticle(props) {
  return (
    <Container className="container">
      <Title>Ricetta hummus di ceci</Title>
      <Image
        image={getImage(props.data.file)}
        alt="Risotto con carote e piselli"
      />
      <article>
        <h2>Introduzione</h2>
        <p>
          Se non lo conoscete già, l'<b>hummus</b> è una deliziosa crema da
          spalmare vegana a base di ceci, tahini, limone e spezie. Viene
          comunemente consumato in Medio Oriente e nel Mediterraneo. Un pizzico
          di paprika affumicata e il vostro hummus andrà letteralmente a ruba
          durante vostri aperitivi! Qui in Italia puoi trovare versioni
          acquistate in negozio o al supermercato, ma pensiamo che dovresti
          crearne una tua. Fidatevi, una volta fatta in casa non tornerete più
          indietro (provare per credere!). Ora vi mostriamo come si prepara.
        </p>

        <InfoContainer>
          <InfoBox>
            <b>Preparazione</b>
            <br /> 10 minuti
          </InfoBox>
          <InfoBox>
            <b>Cottura</b>
            <br /> 3 minuti
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
          <ListItem>600 g ceci precotti</ListItem>
          <ListItem>150 ml acqua calda</ListItem>
          <ListItem>100 g semi di sesamo</ListItem>
          <ListItem>½ Succo di limone</ListItem>
          <ListItem>50 g di olio extravergine di oliva</ListItem>
          <ListItem>1 cucchiaino paprika</ListItem>
          <ListItem>1 spicchio d’aglio</ListItem>
          <ListItem>Sale fino q.b.</ListItem>
          <ListItem>Pepe nero q.b.</ListItem>
        </ul>

        <h2>Preparazione</h2>
        <p>
          Per preparare l’hummus iniziate sbucciando uno spicchio d'aglio,
          dividetelo a metà per togliere l'anima interna e procedete tritandolo
          finemente.
        </p>

        <p>
          Per la Tahina, tostare 3 minuti in una padella antiaderente il sesamo,
          girandolo con un cucchiaio un paio di volte. Trasferire i semi in un
          frullatore, aggiungere l’olio e ridurre in crema.
        </p>
        <p>
          Poi unite alla crema i ceci precotti, scolati dal liquido di
          conservazione. Spremete il succo di mezzo limone, aggiungete l'aglio,
          olio, sale e pepe e tritate tutto nel frullatore finchè non avrà
          raggiunto una consistenza cremosa.
        </p>
        <p>
          Il vostro hummus è pronto, ora non vi resta altro che aggiungere una
          spolverata di paprika ed il gioco è fatto!
        </p>
      </article>

      <ArticleLinks>
        <VioletLink to="/">Indietro</VioletLink>
        <VioletLink to="/ricetta-hummus-ceci">Prossima ricetta</VioletLink>
      </ArticleLinks>
    </Container>
  );
}

export default HummusArticle;
