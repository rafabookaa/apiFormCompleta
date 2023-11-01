import Logoo from '../logo'
// import Opcoes from '../OpcoesHeader'
// import IconesHeader from '../IconesHeader'
import styled from 'styled-components'

const HeaderContainer = styled.header`
  display:flex;
  background-color: #fff; 
  justify-content: center;
`

function Header () {
  return (
    
    <HeaderContainer>
        
    <Logoo/>
    {/* <Opcoes/> */}
    {/* <IconesHeader/> */}
    
    </HeaderContainer>
  
  )
}

export default Header;