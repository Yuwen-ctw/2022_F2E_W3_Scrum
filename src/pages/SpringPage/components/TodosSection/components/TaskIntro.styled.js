import styled from 'styled-components'

import Dialog from '../../shareStyle/Dailog'

const StyledContainer = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 64px;
`
const StyledAvatar = styled.img`
  width: 100px;
`

const StyledDialog = styled(Dialog)`
  padding: 20px 24px;
  border: 3px solid var(--SecondDarkL);
  display: flex;
  align-items: center;
  height: 112px;
  p {
    margin: 0;
  }
`
export { StyledContainer, StyledAvatar, StyledDialog }
