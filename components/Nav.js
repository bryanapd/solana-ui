import { ReactNode } from 'react';
import {
  Box, Flex, Avatar, HStack, Link, IconButton, Button, Spacer,
  Menu, MenuButton, MenuList, MenuItem, MenuDivider, Heading,
  useDisclosure, useColorModeValue, Stack, Image, 
} from '@chakra-ui/react';
import { 
  HamburgerIcon, CloseIcon 
} from '@chakra-ui/icons';
import { FaGlobe } from 'react-icons/fa'



const Links = ['Developers', 'Networks', 'Validators', 'Community', 'Ecosystem'];

const NavLink = ({ children, extra }) => (
  <Link px={2} py={1} rounded={'md'} href={'#'}>
    {children}
    { extra }
  </Link>
);

export const Nav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bgColor="black" px={4} color="white">
        <Flex h={20} alignItems={'center'} >
          <HStack cursor="pointer" href="#">
            <Image cursor="pointer" h={9} w={9} src="https://cryptologos.cc/logos/solana-sol-logo.png" />
            <Heading size="lg">SOLANA</Heading>
          </HStack>
          <Spacer />
          <HStack spacing={8} alignItems={'center'}>
            <HStack
              as={'nav'}
              spacing={4}
              fontWeight={800}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  color={'black'}
                  _focus ={{ }}
                  minW={0}>
                  <FaGlobe fontSize={25} color="white" />
                </MenuButton>
                <MenuList bg="black">
                  <MenuItem>Link 1</MenuItem>
                  <MenuItem>Link 2</MenuItem>
                  <MenuDivider />
                  <MenuItem>Link 3</MenuItem>
                </MenuList>
              </Menu>
            </HStack>
          </HStack>
          <IconButton
            bg="black" size="md" display={{ md: 'none' }} 
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            onClick={isOpen ? onClose : onOpen}
            _hover= {{
              color: 'black',
              bg: 'white',
              border: 'none' 
            }}
            _focus={{
              border: 'none'
            }}/>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack align="flex-start" as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

    </>
  );
}