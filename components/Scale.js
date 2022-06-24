import { Box, Text, Flex, Image, Container, Heading } from '@chakra-ui/react'
import { ThemedTitle } from './Layout'
export const Scale = () => (
  <Box color="white" lineHeight={1.5}>

    <Container maxW="container.md" textAlign={{base: 'center', md: 'left'}}>
      <ThemedTitle>Scale <br /> for global adoption</ThemedTitle>
      <Text pt={5} fontSize="xl">
        Integrate once and never worry about scaling again. 
        Solana ensures composability between ecosystem projects by maintaining a single 
        global state as the network scales. Never deal with fragmented Layer 2 systems or sharded chains.
      </Text>
    </Container>

    <Box>
      <Image alt="scalability img" src="https://solana.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Findex_scale_adoption.c7a36416.png&w=3840&q=90" />
    </Box>

  </Box>
)

