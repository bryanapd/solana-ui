import { Box, Text, Heading, Grid, Image } from '@chakra-ui/react'
import { ThemedTitle } from './Layout'
export const ItemCard = ({ children }) => (
  <Box h="auto" w={{base: 'auto', md: '40vw'}} borderRadius={25} bg="#232325" color="white" overflow="hidden">
    { children }
  </Box>
)
export const Network = () => (
  <Grid templateColumns={{ base: 'auto', md: 'repeat(2, 1fr)' }} gap={5}>
    <ItemCard>
      <Box p={5}>
        <ThemedTitle>Low Cost, <br /> forever</ThemedTitle>
        <Text pt={5} fontSize="xl">Solana's scalability ensures transactions remain less than <br /> $0.01 for both developers and users.</Text>
      </Box>
      <Image src="https://solana.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Findex_low_cost.5dfdb6d1.png&w=2048&q=90" />
    </ItemCard>

    <ItemCard>
      <Box p={5}>
        <ThemedTitle>Fast, <br /> forever</ThemedTitle>
        <Text pt={5} fontSize="xl">Solana is all about speed, with 400 millisecond block times. And as hardware gets faster, so does the network.</Text>
      </Box>
      <Image src="https://solana.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Findex_fast_fck.47b945e5.png&w=2048&q=90" />
    </ItemCard>
  </Grid>
)