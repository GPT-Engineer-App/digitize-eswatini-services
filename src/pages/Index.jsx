import { Container, Text, VStack, Box, Heading, IconButton, HStack } from "@chakra-ui/react";
import { FaBuilding, FaMapMarkerAlt, FaBullhorn, FaCar } from "react-icons/fa";

const services = [
  {
    icon: FaBuilding,
    title: "Help with Company Registration",
    description: "We assist informal businesses in eSwatini with the process of registering their companies, ensuring they meet all legal requirements.",
  },
  {
    icon: FaMapMarkerAlt,
    title: "Office Space in Matsapha",
    description: "We provide affordable office spaces in Matsapha, equipped with all necessary amenities to help your business thrive.",
  },
  {
    icon: FaBullhorn,
    title: "Support with Digital Marketing",
    description: "Our team offers comprehensive digital marketing support to help you reach a wider audience and grow your business online.",
  },
  {
    icon: FaCar,
    title: "Commercial Auto Rentals",
    description: "We offer commercial auto rentals to help you with logistics and transportation needs for your business operations.",
  },
];

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" mb={8}>
          Digify eSwatini
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Digitizing Informal Businesses in eSwatini
        </Text>
        {services.map((service, index) => (
          <Box key={index} p={5} shadow="md" borderWidth="1px" borderRadius="md" width="100%">
            <HStack spacing={4}>
              <IconButton aria-label={service.title} icon={<service.icon />} size="lg" isRound />
              <VStack align="start">
                <Heading as="h3" size="md">
                  {service.title}
                </Heading>
                <Text>{service.description}</Text>
              </VStack>
            </HStack>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;
