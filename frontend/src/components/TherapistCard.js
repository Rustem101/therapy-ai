import { Box, Image, Text, Button, useColorModeValue } from "@chakra-ui/react";

const TherapistCard = ({ therapist, onSelect }) => {
  const cardBg = useColorModeValue("white", "gray.700");
  const hoverShadow = useColorModeValue("xl", "dark-lg");

  return (
    <Box
      bg={cardBg}
      borderRadius="2xl"
      p={6}
      boxShadow="md"
      transition="all 0.2s"
      _hover={{ boxShadow: hoverShadow, transform: "translateY(-4px)" }}
    >
      <Image
        src={therapist.photo}
        alt={therapist.name}
        borderRadius="xl"
        mb={4}
        h="200px"
        objectFit="cover"
      />
      <Text fontSize="xl" fontWeight="bold" mb={2}>
        {therapist.name}
      </Text>
      <Text color="gray.500" mb={4}>
        {therapist.description}
      </Text>
      <Button
        onClick={onSelect}
        colorScheme="blue"
        size="md"
        w="100%"
        borderRadius="lg"
      >
        Start Session
      </Button>
    </Box>
  );
};

export default TherapistCard;
