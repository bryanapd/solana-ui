import { Button, Heading } from '@chakra-ui/react'

export const ThemedButton = ({ title, bg = "black", style }) => (
  <Button 
    color="white" 
    bg={bg} 
    rounded="full" 
    style={style}
    _hover={{
      bg: 'primary.tealgreen',
      color: 'primary.black'
    }}
    _focus={{
      bg: 'primary.tealgreen',
      color: 'primary.black'
    }}>{title}</Button>
)

export const ThemedTitle = ({ children, color = 'white',  }) => (
  <Heading color={color} fontSize={{ base: '4xl', md: '65px' }}>{children}</Heading>
)