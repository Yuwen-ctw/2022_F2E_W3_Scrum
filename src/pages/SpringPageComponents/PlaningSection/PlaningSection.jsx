import styled from 'styled-components'
import PlaningModal from './PlaningModal'
import ProductBacklog from './ProductBacklog'
import SpringBacklog from './SpringBacklog'
import { planing_bg } from '../../../assest/images'

const StyledContainer = styled.div`
  position: relative;
  z-index: 1;
  height: 100%;
  display: flex;
  justify-content: space-between;
`

const StyledBG = styled.img`
  position: absolute;
  width: calc(100% + 120px);
  left: -60px;
  bottom: 0px;
  background: linear-gradient(
    to top,
    #80c74f 0px,
    #80c74f 72px,
    transparent 72px,
    transparent 100%
  );
`

function PlaningSection() {
  return (
    <>
      <StyledContainer>
        <ProductBacklog />
        <SpringBacklog />
      </StyledContainer>
      <StyledBG src={planing_bg} alt="beach" />
      <PlaningModal />
    </>
  )
}
export default PlaningSection
