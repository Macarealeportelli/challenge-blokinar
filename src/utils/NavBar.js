import { Link } from "react-router-dom";
import styled from "styled-components";

const BarraNavegacion = styled.nav`
  width: 100%;
  height: 50px;
  display: flex;
  padding: 10px;

  font-size: 20px;

  background-color: #333362;
  color: #fafafa;

  
  align-items: center;
`;

const StyledLink = styled(Link)`
  margin: 20px;
  text-decoration: none;
  &:visited {
    color: #fafafa;
  }
  &:active {
    color: rgb(33, 150, 243);
  }
 
  `;

const NavBar =()=>{
    return(
        <BarraNavegacion>
        <StyledLink to='/'>HOME</StyledLink>
        <StyledLink to='/infectados'>Casos Positivos</StyledLink>
        <StyledLink to='/estadisticas'>En el Mundo</StyledLink>
      </BarraNavegacion>
    )
};

export default NavBar;