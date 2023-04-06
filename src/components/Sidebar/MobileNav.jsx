import {
  Avatar,
  Box,
  Flex,
  HStack,
  IconButton,
  Skeleton,
  Text,
  useColorModeValue,
  VStack
} from '@chakra-ui/react'
import React from 'react'
import { FiChevronDown, FiMenu } from 'react-icons/fi'
import { useLocation } from 'react-router-dom'

const MobileNav = ({ onOpen, ...rest }) => {
  const { pathname } = useLocation()

  return (
    <Flex
      ml={{ base: 0, lg: 72 }}
      px={{ base: 4, lg: 4, xl: '14' }}
      py={4}
      height='20'
      alignItems='center'
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth='1px'
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'space-between' }}
     
      {...rest}>
      <HStack>
        <IconButton
          display={{ base: 'flex', lg: 'none' }}
          onClick={onOpen}
          variant='outline'
          border={0}
          aria-label='open menu'
          icon={<FiMenu size={'25px'} />}
        />
        <Text textTransform='capitalize' fontWeight='medium' fontSize='3xl'>
          {pathname === '/' ? 'Dashboard' : pathname.split('/')[1]}
        </Text>
      </HStack>
    </Flex>
  )
}

export default MobileNav
