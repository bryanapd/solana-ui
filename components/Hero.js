import {
  Button, Flex, Heading, Image, Stack, Text,
  Box, 
} from '@chakra-ui/react';
export const Hero = () => (
  <Stack minH="80vh" direction={{ base: 'column', md: 'row' }} pos="relative" justify={{ base: 'center', md: 'normal'}}>

    <Box w="100%">
      <Image h="80vh" w="100%" objectFit="cover" src="https://solana.com/src/img/index/hero-wide.jpg" />
    </Box>

    <Stack 
      px={20} spacing={6} w="full" pos="absolute" top="20" color="white" 
      textAlign={{ base: 'center', md: 'left' }}
      >
      <Heading fontSize={{ base: '4xl', md: '85px' }}>Powerful for <br /> developers. <br />Fast for everyone.</Heading>
      <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
        <Button p={6} rounded="full" bg="primary.tealgreen" color="black">START BUILDING</Button>
        <Button 
          p={6} 
          rounded="full" 
          variant="outline" 
          color="white" 
          _hover={{ 
            color: 'black', 
            bg: 'primary.tealgreen' 
          }}>
            READ DOCUMENTATION
          </Button>
      </Stack>
      <Text fontSize={{base: '', md: 'xl'}}>
        Solana is a decentralized blockchain built to enable 
        <br /> scalable, user-friendly apps for the world.
      </Text>
    </Stack>

  </Stack>
)