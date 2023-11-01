
import perfil from '../../img/perfil.svg';
import sacola from '../../img/sacola.svg';
import styled from 'styled-components';

const IconesContainer = styled.ul`
  display:flex;
  align-items: center;
`

const Icone = styled.li`
  margin-right: 30px;
  width: 25px;
`

const icones = [perfil, sacola];

function IconesHeader () {
  return (
    <IconesContainer>
          {icones.map((icone) => (
            // eslint-disable-next-line jsx-a11y/alt-text
            <Icone><img src={icone}></img></Icone>
          ))}
    </IconesContainer>
  )
}

export default IconesHeader;