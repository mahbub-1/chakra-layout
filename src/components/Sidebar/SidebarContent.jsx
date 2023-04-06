import {
  Avatar,
  Box,
  CloseButton,
  Flex,
  Image,
  Skeleton,
  Text,
  useColorModeValue,
  VStack
} from '@chakra-ui/react'


import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './SideBar.css'

import CollapseItem from '../Sidebar/CollaspeItem'
import { MainNavItems } from '../Sidebar/NavItems.js'
import logoImg from '../../assets/images.png'
const SidebarContent = ({ onClose, ...rest }) => {


  return (
    <Box
    borderRight={'1px'}
    borderRightColor={'gray.300'}
      transitionDuration='3s'
      transitionTimingFunction='ease'
      bg={useColorModeValue('white', 'gray.900')}
      w={{ base: 'full', lg: '72' }}
      zIndex='999'
      pos='fixed'
      overflowY={'auto'}
      h='full'
      {...rest}>
      <Flex h='24' alignItems='center' mx='8' justifyContent='space-between'>
        <Link to='/'>
          <Image src={logoImg} alt='Brand Logo' />
        </Link>
        <CloseButton display={{ base: 'flex', lg: 'none' }} onClick={onClose} />
      </Flex>
      {MainNavItems.map((nav) =>
        nav?.children?.length ? (
          <CollapseItem nav={nav} key={nav.id}  />
        ) : (
          <Flex
            key={nav.id}
            className={({ isActive }) => `
            menu-item 
            ${isActive ? 'active' : ''}`}
            as={NavLink}
            to={nav.path}
            gap='10px'
            justifyContent='space-between'
            alignItems='center'
            bg={({ isActive }) => (isActive ? '#C34822' : '#FFFFFF')}
            _hover={{ bg: '#64acab' }}
            color='#1D3849'
            width='230px'
            height='60px'
            mx='6'
            px={4}
            py={5}
            mt='2'
            borderRadius='10px'
            fontWeight='normal'
            _focusVisible={false}
            >
            <Flex gap={4}>
              {/* <nav.icon /> */}
              <Text>{nav?.label}</Text>
            </Flex>
          </Flex>
        )
      )}

    </Box>
  )
}
export default SidebarContent
