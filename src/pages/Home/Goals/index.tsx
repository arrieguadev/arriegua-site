import * as React from "react";
import { Container, Item, Title, Box, Bullet } from "./styles";

interface Props {}

const Goals: React.SFC<Props> = (props) => {
  return (
    <Container>
      <Title>Objetivos</Title>
      <Box>
        <Item>
          <Bullet>●</Bullet> Desenvolver projetos para evolução da comunidade
          onde seus membros residem
        </Item>
        <Item>
          <Bullet>●</Bullet> Elaborar materiais (vídeos, tutoriais, artigos,
          podcasts...)
        </Item>
        <Item>
          <Bullet>●</Bullet> Participar de competições (Hacktons, maratonas de
          programação...)
        </Item>
        <Item>
          <Bullet>●</Bullet> Organizar eventos com palestras e minicursos com
          ajuda da iniciativa pública e privada
        </Item>
      </Box>
    </Container>
  );
};

export default Goals;
