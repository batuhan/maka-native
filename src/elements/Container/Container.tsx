import React, { ReactNode } from 'react'
import { View } from 'react-native'
import styled from 'styled-components'

const ContainerView = styled(View)<{ padding?: string; bgColor?: string }>`
  flex: 1;
  ${({bgColor}) => bgColor && `background-color: ${bgColor};`};
  ${({padding}) => padding && `padding: ${padding};`};
`

interface Props {
  children: ReactNode
  bgColor?: string
  padding?: string
}

export default function({ children, bgColor, padding }: Props) {
  return (
    <ContainerView padding={padding} bgColor={bgColor}>
      {children}
    </ContainerView>
  )
}
