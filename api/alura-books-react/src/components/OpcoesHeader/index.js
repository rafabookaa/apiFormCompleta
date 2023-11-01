

import styled from 'styled-components';

const OpcoesHeader = styled.ul`
  display: flex; 
`
const OpcaoHeader = styled.ul`
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
  min-width: 120px;
`

const textoOpcoes = ['CATEGORIA', 'MINHA ESTANTE', 'FAVORITOS'];

function Opcoes () {

  return (
<OpcoesHeader>
          {textoOpcoes.map((texto) => (
            <OpcaoHeader><p>{texto}</p></OpcaoHeader>
          ) )}
        </OpcoesHeader>

  )
}



export default Opcoes; 