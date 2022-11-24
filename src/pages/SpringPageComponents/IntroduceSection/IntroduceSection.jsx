import styled from 'styled-components'
import RoleCard from './RoleCard'
import IntroModal from './IntroModal'

const StyledTitle = styled.h1`
  margin-top: 36px;
  text-align: center;
  font-weight: 700;
  font-size: 60px;
  line-height: 90px;
  color: #ffffff;
`
const StyledRoleContainer = styled.div`
  margin-top: 24px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`

function IntroduceSection() {
  return (
    <>
      <StyledTitle>角色介紹</StyledTitle>
      <StyledRoleContainer>
        <RoleCard role={'productOwner'} />
        <RoleCard role={'scrumMaster'} />
        <RoleCard role={'developer'} />
      </StyledRoleContainer>
      <IntroModal />
    </>
  )
}
export default IntroduceSection
