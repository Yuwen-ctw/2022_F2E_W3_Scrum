import Dropbox from '../share/Dropbox'
import DropContainer from '../share/DropContainer'
import styled from 'styled-components'

const StyledDropContainer = styled(DropContainer)`
  position: absolute;
  top: 350px;
  right: 65px;
  width: 616px;
  height: 440px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row: auto;
  gap: 208px 24px;
`
const StyledDropbox = styled(Dropbox)`
  width: 296px;
  height: 118px;
  background: rgba(44, 132, 146, 0.5);
  border: 5px dashed #ffffff;
  &:nth-child(2) {
    grid-row: 2 / 3;
  }
  &:nth-child(3) {
    grid-row: 2 / 3;
  }
`
function Dropboxes() {
  return (
    <>
      <StyledDropContainer>
        <StyledDropbox></StyledDropbox>
        <StyledDropbox></StyledDropbox>
        <StyledDropbox></StyledDropbox>
      </StyledDropContainer>
    </>
  )
}

export default Dropboxes
