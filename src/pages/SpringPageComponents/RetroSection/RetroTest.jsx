import { useRef } from 'react'
import styled from 'styled-components'
import { retro_check, arrive } from '../../../assest/images'

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

function RetroTest({ onChange }) {
  const goodPointRef = useRef(null)
  const reviewPointRef = useRef(null)

  function checkAnswer() {
    if (
      goodPointRef.current.checked === true &&
      reviewPointRef.current.checked === true
    ) {
      onChange(true)
    } else {
      onChange(false)
    }
  }
  return (
    <StyledTestContainer>
      <div>
        <StyledTitle>做得好的地方</StyledTitle>
        <StyledInputContainer onChange={checkAnswer}>
          <StyledInput
            type="radio"
            name="good-point"
            value="incorrect"
            id="good-point-incorrect"
          />
          <StyledLabel htmlFor="good-point-incorrect">
            這次我幫了很多人救火耶。
          </StyledLabel>
          <StyledInput
            type="radio"
            name="good-point"
            value="correct"
            id="good-point-correct"
            ref={goodPointRef}
          />
          <StyledLabel htmlFor="good-point-correct">
            大家在開發上都會互相幫助，讓任務準時在時間內完成。
          </StyledLabel>
        </StyledInputContainer>
      </div>
      <div>
        <StyledTitle>有哪些可以做得更好</StyledTitle>
        <StyledInputContainer onChange={checkAnswer}>
          <StyledInput
            type="radio"
            name="reflect-point"
            value="correct"
            id="reflect-point-correct"
            ref={reviewPointRef}
          />
          <StyledLabel htmlFor="reflect-point-correct">
            可以記錄這次的開發時間，讓預估團隊點數可以更精準。
          </StyledLabel>
          <StyledInput
            type="radio"
            name="reflect-point"
            value="incorrect"
            id="reflect-point-incorrect"
          />
          <StyledLabel htmlFor="reflect-point-incorrect">
            開發時間預估不準確，請後端下次改進，避免 delay 到我。
          </StyledLabel>
        </StyledInputContainer>
      </div>
    </StyledTestContainer>
  )
}

export default RetroTest
