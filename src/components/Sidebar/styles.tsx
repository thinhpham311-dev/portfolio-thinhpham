import tw, { styled, css, theme } from 'twin.macro'

const SidebarSectionWrapper = styled.section(() => [
    tw`xl:w-3/12 lg:w-4/12 md:w-full sm:w-full w-full h-full bg-orange-100 px-10`,
    css`.sidebar_container{
        ${tw`h-full `}
    }`
])

const SidebarAvatar = styled.div(() => [
    tw` max-w-full  overflow-hidden mx-auto h-[300px] flex flex-col justify-between py-2 my-10`,
    css`
        img{
            ${tw`h-[200px] w-[200px] object-cover rounded-full border-8 border-white shadow-base mx-auto mb-[10px]`}
        }
    `
])

const SidebarBody = styled.div(() => [
    tw`text-center  h-[calc(100%-70px)] flex flex-col justify-between `,
    css`
        h1{
            ${tw`text-3xl font-bold uppercase mb-2`}
        }
        span{
            ${tw`text-xl font-normal`}
        }
    `
])

const SidebarMenu = styled.div(() => [
    tw`text-center overflow-y-auto overflow-x-hidden h-[calc(100%-380px)]`,
    css`
        ul{
            ${tw`grid gap-y-3 py-3`}
            a{
                ${tw`w-full h-[auto] p-[20px] block border-2 border-black rounded-full shadow-base`}
            }
        }
    `
])

const SidebarFooter = styled.div(() => [
    tw` border-t-2 border-black h-[70px] flex items-center`,
    css`ul{
        ${tw`flex justify-between w-full`}
        a{
            ${tw`block border-2 border-black px-3 py-1 rounded-full`}
        }
    }`
])

export {
    SidebarSectionWrapper,
    SidebarBody,
    SidebarAvatar,
    SidebarMenu,
    SidebarFooter
}