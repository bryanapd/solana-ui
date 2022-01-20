import { Box, Text, Flex, Image, Container, Heading } from '@chakra-ui/react'
import { ThemedTitle } from './Layout'
export const Decentralized = () => (
  <Box 
    color="white" lineHeight={1.5} pos="relative" bgSize="cover" height="70vh" 
    textAlign={{ base: 'center', md: 'left'}}
    bgImg="https://solana.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Findex_decentralized.cc2957f6.png&w=3840&q=75"
    >
    <Container maxW="container.md" pos="absolute" left="0" right="0" bottom="0">
      <ThemedTitle>Decentralized <br /> and unstoppable</ThemedTitle>
      <Text fontSize="xl" pt={5}>
        Not only is Solana ultra-fast and low cost, it is censorship resistant. Meaning, 
        the network will remain open for applications to run freely and transactions will never be stopped.
      </Text>
    </Container>
  </Box>
)

