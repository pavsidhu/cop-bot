// @flow
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

type Props = {
  backButton?: boolean,
  backButtonLink?: string,
  backButtonText?: string,
  children: React.Node
};

const Paper = (props: Props) => (
  <Container>
    {props.backButton ? (
      <Link to={props.backButtonLink}>
        <BackButton>
          <BackButtonIcon src="./src/assets/icons/back.svg" />
          <BackButtonText>{props.backButtonText}</BackButtonText>
        </BackButton>
      </Link>
    ) : null}
    <ChildrenContainer>{props.children}</ChildrenContainer>
  </Container>
)

Paper.defaultProps = {
  backButton: false,
  backButtonLink: '/',
  backButtonText: 'Back',
}

const Container = styled.div`
  margin: 24px;
`

const BackButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
  cursor: pointer;
  -webkit-user-select: none;
`

const BackButtonIcon = styled.img`
  width: 32px;
  height: 32px;
`

const BackButtonText = styled.p`
  margin-left: 8px;
  font-size: 18px;
  color: #313131;
`

const ChildrenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  padding: 24px 0;
  border-radius: 8px;
  background-color: white;
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.1);
`

export default Paper
