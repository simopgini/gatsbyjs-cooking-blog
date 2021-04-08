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

const OtherInfo = styled.h3`
  color: #663399;
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
    file(relativePath: { eq: "risotto.jpeg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, height: 500)
      }
    }
  }
`;

function RisottoArticle(props) {
  return (
    <Container className="container">
      <Title>Risotto con carote e piselli: ricetta, trucchi e segreti</Title>
      <Image
        image={getImage(props.data.file)}
        alt="Risotto con carote e piselli"
      />

      <article>
        <h2>Introduzione</h2>
        <p>
          Il <b>risotto veg piselli e carote </b>è un primo piatto molto
          semplice da realizzare, ma che regala tante soddisfazioni. Un risotto
          primaverile e colorato per assaporare i piccoli piaceri della vita.
          Siete pronti a scoprire i segreti di un risotto vegano cremoso?
        </p>

        <InfoContainer>
          <InfoBox>
            <b>Preparazione</b>
            <br /> 25 minuti
          </InfoBox>
          <InfoBox>
            <b>Cottura</b>
            <br /> 30 minuti
          </InfoBox>
          <InfoBox>
            <b>Difficoltà</b>
            <br /> bassa
          </InfoBox>
          <InfoBox>
            <b>Porzioni</b>
            <br /> 4
          </InfoBox>
        </InfoContainer>
        <br />

        <h2>Ingredienti</h2>

        <p>Ecco la lista degli ingredienti:</p>
        <ul>
          <ListItem>450 g di riso arborio o carnaroli</ListItem>
          <ListItem>150 g di carote</ListItem>
          <ListItem>200 g piselli</ListItem>
          <ListItem>1 cipolla</ListItem>
          <ListItem>80 ml passata di pomodoro</ListItem>
          <ListItem>mezzo bicchiere di vino bianco</ListItem>
          <ListItem>q.b. sale, pepe, olio extravergine di oliva</ListItem>
          <ListItem>
            q.b. spezie: peperoncino, pepe, paprika dolce e affumicata
          </ListItem>
        </ul>

        <OtherInfo>Per la salsa cremosa</OtherInfo>
        <ul>
          <ListItem>30 g di anacardi</ListItem>
          <ListItem>20 g di lievito in scaglie</ListItem>
          <ListItem>q.b. acqua</ListItem>
        </ul>

        <OtherInfo>Per il brodo vegetale</OtherInfo>
        <ul>
          <ListItem>1 carota</ListItem>
          <ListItem>1 cipolla</ListItem>
          <ListItem>1 piccolo pezzo di gambo di sedano</ListItem>
        </ul>

        <h2>Preparazione</h2>
        <p>
          Preparate per prima cosa il brodo vegetale. Prendete un pentolino e
          versateci dentro 2 litri di acqua, aggiungete una carota, il gambo di
          sedano e la cipolla sbucciata e la passata di pomodoro,accendete il
          fuoco e portare a bollore.
        </p>
        <p>
          Poi lavate e sbucciate le carote ed iniziate a tagliarle a piccoli
          cubetti. Procedete tagliando la cipolla a pezzettini. Fate soffriggere
          la cipolla all'interno di una padella con dell'olio extravergine
          d'oliva e, dopo 2 minuti, aggiungete le carote.
        </p>
        <p>
          Lasciate soffriggere per qualche altro minuto ed unite il riso per
          farlo tostare. Dopodichè sfumate con il vino bianco.
        </p>
        <p>
          Aggiungete i piselli al risotto insieme alla passata di pomodoro,
          regolate di sale e mescolate bene. Proseguite aggiungendo il brodo
          vegetale con un mestolo a poco a poco (mi raccomando, non fate
          annegare il riso nell'acqua!). Ricordatevi di mescolare spesso il
          risotto.
        </p>
        <p>
          Ora è arrivato il momento per preparare la cremina che renderà il
          vostro risotto veg delizioso che stupirà anche i più scettici per la
          sua bontà e cremosità! Pronti? Basta ad ingredienti sconosciuti e
          introvabili, la magia è riposta in soli 3 ingredienti chiave:
          anacardi, lievito in scaglie e acqua! Sì, avete capito bene. Con un
          mixer mischiate questi 3 ingredienti fino a formare una cremina
          abbastanza densa.
        </p>

        <p>
          A questo punto, mischiate il risotto per non farlo attaccare e ad
          aggiungere il brodo finchè il riso non sarà al dente. Unite al risotto
          la cremina appena fatta e mantecate fino ad ottenere la consistenza
          desiderata.
        </p>
      </article>

      <ArticleLinks>
        <VioletLink to="/">Indietro</VioletLink>
        <VioletLink to="/ricetta-hummus-ceci">Prossima ricetta</VioletLink>
      </ArticleLinks>
    </Container>
  );
}

export default RisottoArticle;
