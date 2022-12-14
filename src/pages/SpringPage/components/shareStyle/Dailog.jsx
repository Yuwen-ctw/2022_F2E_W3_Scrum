import styled from 'styled-components'

const Dialog = styled.div`
  padding: 24px 36px;
  background: #ffffff;
  border: 5px solid #373a3b;
  border-radius: 20px;
  width: ${({ width }) => (width ? width : 'fit-content')};

  p {
    margin-top: 12px;
    font-size: 24px;
    line-height: 36px;
    color: #000000;
  }
`

export default Dialog
