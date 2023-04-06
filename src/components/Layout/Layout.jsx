import {
  Box,
  Drawer,
  DrawerContent,
  Stack,
  useDisclosure
} from '@chakra-ui/react'
import React from 'react'

import { Outlet } from 'react-router-dom'
import SidebarContent from '../Sidebar/SidebarContent'
import MobileNav from '../Sidebar/MobileNav'

const Layout = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box minH='100vh'>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', lg: 'block' }}
        transition='3s ease'
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size='full'>
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <MobileNav onOpen={onOpen} />
      <Box
        ml={{ base: 0, lg: 72 }}
        px={{ sm: 5, lg: 12 }}
        pt={{ sm: 5, lg: 12 }}>
        <Outlet />
      </Box>
    </Box>
  )
}

export default Layout
