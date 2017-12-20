// @flow
import React from 'react'
import styled, { css } from 'styled-components'
import { withRouter } from 'react-router'

import backIcon from '../assets/icons/back.svg'

type Props = {
  backButton?: string,
  noMargin?: boolean,
  children: React.Node
};

const Paper = (props: Props) => (
  <Container>
    {props.backButton ? (
      <BackButton onClick={props.history.goBack}>
        <BackButtonIcon src={backIcon} />
        <BackButtonText>{props.backButton}</BackButtonText>
      </BackButton>
    ) : null}
    <ChildrenContainer noMargin={props.noMargin}>{props.children}</ChildrenContainer>
  </Container>
)

Paper.defaultProps = {
  backButton: '',
  noMargin: false
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
  border-radius: 8px;
  background-color: white;
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.1);

  ${props =>
    !props.noMargin &&
    css`
      padding: 24px 0;
    `};
`

export default withRouter(Paper)
