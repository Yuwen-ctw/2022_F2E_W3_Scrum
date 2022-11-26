import styled from 'styled-components'
const StyledRoleCard = styled.div`
  padding: 36px 48px;
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 60px;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: rgba(44, 132, 146, 0.5);
  border-radius: 20px;

  .role__img {
    margin: 0 auto;
  }

  .role__title {
    margin-top: 35.78px;
    font-weight: 700;
    font-size: 48px;
    line-height: 71px;
    color: #ffffff;
  }

  .role__en-title {
    font-weight: 700;
    font-size: 32px;
    line-height: 48px;
    color: #ffffff;
  }

  .role__detail {
    max-width: 300px;
    margin-top: 36px;
    font-weight: 400;
    font-size: 24px;
    line-height: 36px;
    color: #ffffff;
  }
`
export { StyledRoleCard }
