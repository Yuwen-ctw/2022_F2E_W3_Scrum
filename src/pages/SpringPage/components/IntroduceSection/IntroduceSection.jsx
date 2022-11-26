import { StyledTitle, StyledRoleContainer } from './IntroduceSection.styled'
import { IntroModal, RoleCard } from './components'

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
