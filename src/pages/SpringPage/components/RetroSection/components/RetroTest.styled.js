import styled from 'styled-components'
import { retro_check, arrive } from '../../../../../assest/images'

const StyledTestContainer = styled.div`
  position: absolute;
  bottom: 54px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 32px;
`
const StyledTitle = styled.h3`
  margin-top: 36px;
  font-weight: 700;
  font-size: 36px;
  line-height: 54px;
  text-align: center;
  color: #ffffff;
`

const StyledInputContainer = styled.div`
  margin-top: 36px;
  padding: 36px 48px;
  background: rgba(255, 255, 255, 0.65);
  border-radius: 20px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  row-gap: 36px;
`

const StyledInput = styled.input`
  display: none;
  &:checked + label {
    background-image: url(${arrive});
    outline: 5px solid var(--SecondDarkL);
  }
`

const StyledLabel = styled.label`
  max-width: 536px;
  background: rgba(255, 255, 255, 0.85);
  border-radius: 20px;
  padding: 24px 24px 24px 84px;
  font-weight: 700;
  font-size: 32px;
  line-height: 48px;
  color: var(--SecondDarkL);
  cursor: pointer;
  display: flex;
  align-items: center;
  background-image: url(${retro_check});
  background-repeat: no-repeat;
  background-position: 24px center;
  &:hover {
    outline: 5px solid var(--SecondDarkL);
  }
`
export {
  StyledTestContainer,
  StyledTitle,
  StyledInputContainer,
  StyledInput,
  StyledLabel,
}
