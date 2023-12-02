'use client'
import React from 'react'
import { createGlobalStyle } from 'styled-components'
import tw, { theme, styled, GlobalStyles as BaseStyles } from 'twin.macro'

const CustomStyles = createGlobalStyle({
  body: {
    WebkitTapHighlightColor: theme`colors.purple.500`,
    ...tw`antialiased`,
  },
})

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
)

export default GlobalStyles


export const Container = styled.div`
  ${tw`container mx-auto`}
`