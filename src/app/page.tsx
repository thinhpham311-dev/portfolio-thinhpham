'use client'
import React from 'react'
import tw, { styled, css, theme } from 'twin.macro'
import { SidebarSection, ContentRightSection } from '../components'

const Home = () => (
  <WrapperComponent>
    <SidebarSection />
    <ContentRightSection />
  </WrapperComponent>
)

export default Home

const WrapperComponent = styled.section(() => [
  tw`w-full h-[100vh] flex flex-wrap`
])