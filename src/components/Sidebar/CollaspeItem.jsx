import { Collapse, Flex, Text, useDisclosure } from '@chakra-ui/react'

import { NavLink } from 'react-router-dom'

const CollapseItem = ({ nav }) => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <>
      <Flex
        as='button'
        gap='10px'
        justifyContent='space-between'
        alignItems='center'
        bg={isOpen ? '#64acab' : '#FFFFFF'}
        _hover={{ bg: '#64acab' }}
        width='230px'
        height='60px'
        mx='6'
        px={4}
        py={5}
        my={2}
        borderRadius='10px'
        fontWeight='normal'
        onClick={onToggle}
        className={`menu-item ${isOpen ? 'active-icon' : ''}`}>
        <Flex gap={4}>
          {/* <nav.icon /> */}
          <Text>{nav?.label}</Text>
        </Flex>
      </Flex>
      <Collapse
        in={isOpen}
        animateOpacity={true}
        className={` ${open ? 'sub-active' : ''}`}>
        {nav?.children?.map((item) => (
          <Flex
            className={({ isActive }) => `
          menu-item 
          ${isActive ? 'active' : ''}`}
            key={item.id}
            as={NavLink}
            to={item.path}
            gap='10px'
            my={'1'}
            justifyContent='space-between'
            alignItems='center'
            _hover={{
              bg: 'gray.100',
              textDecoration: 'none'
            }}
            color='#000000'
            width={'full'}
            p={3}
            borderRadius='10px'
            fontWeight='normal'
            _focusVisible={false}>
            <Flex gap={4}>
              {/* <item.icon /> */}
              <Text>{item?.label}</Text>
            </Flex>
          </Flex>
        ))}
      </Collapse>
    </>
  )
}
export default CollapseItem
