import { Box, Text, Flex, Heading, Grid, Spacer } from '@chakra-ui/react'

const TrackerCard = ({ title, subtitle, numbers }) => (
  <Flex p={5} h="100px" align="center" bg="primary.tealgreen" border="1px solid black" justify="space-between">
    <Text >{title} <br /> {subtitle}</Text>
    <Heading fontSize={{ base: '2xl', md: '3xl' }}>{numbers}</Heading>
  </Flex>
)
export const Tracker = () => (
  <Grid mt={{ base: '', md: 20 }} templateColumns={{ base: 'auto', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }}>
    <TrackerCard title="Transactions" subtitle="per second" numbers="2,395" />
    <TrackerCard title="Total" subtitle="transactions" numbers="52,091,632" />
    <TrackerCard title="Avg. cost per" subtitle="transaction" numbers="0.00025" />
    <TrackerCard title="Validator" subtitle="nodes" numbers="1,417" />
  </Grid>
)