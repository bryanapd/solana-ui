import { Heading, Text, Flex, Button, Stack } from '@chakra-ui/react'
import { ThemedButton, ThemedTitle } from './Layout'
export const Ecosystem = () => (
  <Stack direction={{ base: 'column', md: 'row' }} p={20} spacing={5} textAlign={{base: 'center', md: 'left'}}>

    <Flex flex={1}>
      <ThemedTitle>Join the fastest growing <br /> system</ThemedTitle>
    </Flex>

    <Flex flex={1} wrap="wrap" justify={{base: 'center', md: 'normal'}} pt={5}>
      <Text color="white" pb={5} fontSize={{ base: '', lg: '2xl' }}>
        Solana is the fastest blockchain in the world and <br />the fastest growing ecosystem in crypto, 
        with over <br />400 projects spanning DeFi, NFTs, Web3 and <br /> more.
      </Text>
      <ThemedButton bg="secondary.purple" title="EXPLORE ECOSYSTEM" />
    </Flex>

  </Stack>
)