import { Heading, Text, Flex, Button, Stack, Box, Grid, Container } from '@chakra-ui/react'
import { ThemedButton, ThemedTitle } from './Layout'


export const Ecosystem = () => (
  <Box pb={20}>
    <Container maxW="container.xl">
      <Grid templateColumns={{ base: 'auto', md: 'repeat(2, 1fr)' }}>
      <ThemedTitle textAlign={{ base: 'center', md: 'left'}}>Join the fastest growing <br /> system</ThemedTitle>

        <Flex flexDir="column" alignItems={{ base: 'center', md: 'flex-start' }} justifyContent={{ base: 'center', md: 'initial'}} pt={5}>
          <Text textAlign={{ base: 'center', md: 'left' }} color="white" fontSize="lg" mb={5}>
            Solana is the fastest blockchain in the world and the fastest growing ecosystem in crypto, 
            with over 400 projects spanning DeFi, NFTs, Web3 and more.
          </Text>
          <Button w="max" color="white" bg="purple.500" rounded="full" 
            _hover={{
              bg: 'primary.tealgreen',
              color: 'primary.black'
            }}
            _focus={{
              bg: 'primary.tealgreen',
              color: 'primary.black'
            }}>EXPLORE ECOSYSTEM</Button>
        </Flex>
      </Grid>
    </Container>
  </Box>
)