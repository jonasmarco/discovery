import React from 'react'

import Button from '@components/atoms/Button'
import Header from '@components/atoms/Header'
import Input from '@components/atoms/TextInput'
import PageTitle from '@components/atoms/PageTitle'
import Paragraph from '@components/atoms/Paragraph'

import * as S from './styles'

const Components = () => {
  return (
    <S.Container>
      <Header>
        <PageTitle>Components</PageTitle>
      </Header>
      <Paragraph>ATOMS</Paragraph>
      <Button>Click me</Button>
      <Input placeholder="First Name" />
      <Input placeholder="Last Name" />
    </S.Container>
  )
}

export default Components
