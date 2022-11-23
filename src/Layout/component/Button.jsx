import styled from 'styled-components'

const StyledContainer = styled.div`
  height: fit-content;
  display: flex;
  gap: 6px;
  cursor: pointer;
  align-items: center;
  font-weight: 700;
  font-size: 28px;
  &:hover {
    scale: ${props => (props.enable ? '1.07' : '1')};
  }
`
const StyledText = styled.p`
  color: ${props => props.color};
`

function ButtonBackward() {
  const color = '#ffffff'
  return (
    <>
      <StyledContainer enable>
        <ArrowBackward color={color} />
        <StyledText color={color}>回上一座島</StyledText>
      </StyledContainer>
    </>
  )
}

function ButtonForward({ enable }) {
  const color = enable ? '#ffffff' : '#8D8A91'

  return (
    <>
      <StyledContainer enable={enable}>
        <StyledText color={color}>前往下一座島</StyledText>
        <ArrowForward color={color} />
      </StyledContainer>
    </>
  )
}
export { ButtonForward, ButtonBackward }

function ArrowBackward({ color }) {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M29.4457 8.55336C29.8152 8.92227 30 9.35905 30 9.86372C30 10.3674 29.8152 10.8037 29.4457 11.1726L18.6189 21.9816L29.4827 32.8274C29.8276 33.1717 30 33.6021 30 34.1186C30 34.635 29.8152 35.0777 29.4457 35.4466C29.0762 35.8155 28.6387 36 28.1332 36C27.6287 36 27.1917 35.8155 26.8222 35.4466L14.4065 23.0145C14.2587 22.8669 14.1537 22.7071 14.0916 22.5349C14.0305 22.3628 14 22.1783 14 21.9816C14 21.7848 14.0305 21.6004 14.0916 21.4282C14.1537 21.256 14.2587 21.0962 14.4065 20.9486L26.8591 8.51647C27.204 8.17216 27.6287 8 28.1332 8C28.6387 8 29.0762 8.18445 29.4457 8.55336Z"
        fill={color}
      />
    </svg>
  )
}

function ArrowForward({ color }) {
  return (
    <svg
      width="16"
      height="28"
      viewBox="0 0 16 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.554272 27.4466C0.184757 27.0777 0 26.6409 0 26.1363C0 25.6326 0.184757 25.1963 0.554272 24.8274L11.3811 14.0184L0.517321 3.1726C0.17244 2.82828 0 2.39789 0 1.88142C0 1.36495 0.184757 0.922266 0.554272 0.55336C0.923787 0.184453 1.36129 0 1.86679 0C2.3713 0 2.80831 0.184453 3.17783 0.55336L15.5935 12.9855C15.7413 13.1331 15.8463 13.2929 15.9084 13.4651C15.9695 13.6372 16 13.8217 16 14.0184C16 14.2152 15.9695 14.3996 15.9084 14.5718C15.8463 14.744 15.7413 14.9038 15.5935 15.0514L3.14088 27.4835C2.796 27.8278 2.3713 28 1.86679 28C1.36129 28 0.923787 27.8155 0.554272 27.4466Z"
        fill={color}
      />
    </svg>
  )
}
