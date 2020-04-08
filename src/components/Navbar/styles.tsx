import styled from 'styled-components';

export const Container = styled.div`
`;
export const Header = styled.div`
  display: flex;
  align-items: center;
  padding-top: 30px;
  margin: 0px 50px;
`;
export const Logo = styled.a`
  font-size: 32px;
  color: #fff;
  font-weight: 100;
  strong {
    font-size: 32px;
    font-weight: bold;
  }
`;
export const Divider = styled.hr`
  border-right: 2px solid #fff;
  height: 64px;
  margin: 0px 40px;
`;
export const ListLinks = styled.div`
  display: flex;
  flex: 1;
  align-items: flex-end;
`;
interface NavLinkProps {
  active?: boolean;
}

export const NavLink = styled.a`
  font-weight: ${(props: NavLinkProps) => (props.active ? 'normal' : 100)};
  text-decoration: ${(props: NavLinkProps) =>
    props.active ? 'underline' : 'none'};
  font-size: 28px;
  color: #ffffff;
  margin: 0px 30px;
`;
