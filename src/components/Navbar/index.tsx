import * as React from 'react';
import { Container, Header, Logo, Divider, ListLinks, NavLink } from './styles';

interface Props {}

const Navbar: React.SFC<Props> = (props) => {
  return (
    <Container>
      <Header>
        <Logo href="/">
          arriegua<strong>dev</strong>
        </Logo>
        <Divider />
        <ListLinks>
          <NavLink active>Home</NavLink>
          <NavLink>Comunidade</NavLink>
          <NavLink>Objetivos</NavLink>
          <NavLink>Time</NavLink>
          <NavLink>Projetos</NavLink>
        </ListLinks>
      </Header>
    </Container>
  );
};

export default Navbar;
