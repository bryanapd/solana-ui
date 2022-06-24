import { ReactNode } from 'react';
import {
  Box, Container, Stack, SimpleGrid, Text,
  Link, Heading, Flex, Spacer, Image
} from '@chakra-ui/react';
import { ThemedTitle } from './Layout';

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={500} fontSize="lg" mb={2} color="gray">
      {children}
    </Text>
  );
};
const FooterButton = ({ title = 'SOLANA.COM' }) => (
  <Flex w="auto" bg="white" color="black" py={6} px={9} borderRadius={20} mt={20}>
    <Image h="30px" src="https://cryptologos.cc/logos/solana-sol-logo.png" alt="Solana Logo" />
    <Spacer />
    <Text>{title}</Text>
  </Flex>
)

export const Footer = ({ title = "Get more out of Solana" }) => {
  return (
    <Box textAlign="center" color="white" h="auto">
      <Heading>{title}</Heading>
      <Container as={Stack} maxW={'6xl'} py={10} bg="black" mt={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={'flex-start'}>
            <ListHeader color="black">Company</ListHeader>
            <Link href={'#'}>About Us</Link>
            <Link href={'#'}>Blog</Link>
            <Link href={'#'}>Careers</Link>
            <Link href={'#'}>Contact Us</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Support</ListHeader>
            <Link href={'#'}>Help Center</Link>
            <Link href={'#'}>Safety Center</Link>
            <Link href={'#'}>Community Guidelines</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Legal</ListHeader>
            <Link href={'#'}>Cookies Policy</Link>
            <Link href={'#'}>Privacy Policy</Link>
            <Link href={'#'}>Terms of Service</Link>
            <Link href={'#'}>Law Enforcement</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Legal</ListHeader>
            <Link href={'#'}>Cookies Policy</Link>
            <Link href={'#'}>Privacy Policy</Link>
            <Link href={'#'}>Terms of Service</Link>
            <Link href={'#'}>Law Enforcement</Link>
          </Stack>
        </SimpleGrid>
      </Container>
      <FooterButton />
    </Box>
  );
}