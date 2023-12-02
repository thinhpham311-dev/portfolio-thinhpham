'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from "@/styles/GlobalStyles"
import { SidebarSectionWrapper, SidebarAvatar, SidebarBody, SidebarMenu, SidebarFooter } from './styles'

const SidebarSection = () => (
    <SidebarSectionWrapper>
        <Container className="sidebar_container">
            <SidebarBody>
                <SidebarAvatar>
                    <Image src="/avatar-bg-thinhpham.jpg" height={500} width={500} alt="" />
                    <h1>Pham Tri Thinh</h1>
                    <span>Web Developer</span>
                </SidebarAvatar>
                <SidebarMenu>
                    <ul>
                        <li>
                            <Link href="" >Home</Link>
                        </li>
                        <li>
                            <Link href="" >About</Link>
                        </li>
                        <li>
                            <Link href="" >Education</Link>
                        </li>
                        <li>
                            <Link href="" >Portfolio</Link>
                        </li>
                        <li>
                            <Link href="" >Contact</Link>
                        </li>
                    </ul>
                </SidebarMenu>
            </SidebarBody>
            <SidebarFooter>
                <ul>
                    <li>
                        <Link href="">Facebook</Link>
                    </li>
                    <li>
                        <Link href="">Zalo</Link>
                    </li>
                    <li>
                        <Link href="">Linked In</Link>
                    </li>
                </ul>
            </SidebarFooter>
        </Container>
    </SidebarSectionWrapper>
)

export default SidebarSection
