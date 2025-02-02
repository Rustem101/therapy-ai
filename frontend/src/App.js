import {
  Flex,
  Heading,
  Text,
  Grid,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import TherapistCard from "./components/TherapistCard";
import { useState } from "react";
import ChatWindow from "./components/ChatWindow";

export default function App() {
  const [selectedTherapist, setSelectedTherapist] = useState(null);
  const bgGradient = useColorModeValue(
    "linear(to-b, blue.100, purple.100)",
    "linear(to-b, gray.800, gray.900)"
  );

  // Mock therapist data (replace with data fetched from your Flask backend)
  const therapists = [
    {
      id: 1,
      name: "Dr. Emily",
      photo: "https://example.com/emily.jpg", // Replace with actual image URL
      description: "Cognitive Behavioral Therapy (CBT) specialist.",
      approach: "CBT",
    },
    {
      id: 2,
      name: "Dr. James",
      photo: "https://example.com/james.jpg",
      description: "Mindfulness and stress reduction expert.",
      approach: "Mindfulness",
    },
  ];

  return (
    <Flex
      minH="100vh"
      direction="column"
      align="center"
      bgGradient={bgGradient}
      py={8}
      px={4}
    >
      {!selectedTherapist ? (
        <>
          <Heading size="xl" mb={4} color="blue.600">
            Meet Your AI Therapist
          </Heading>
          <Text fontSize="lg" mb={8} color="gray.600">
            Choose a therapist to start your session.
          </Text>
          <Grid
            templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
            gap={6}
            maxW="1200px"
            w="100%"
          >
            {therapists.map((therapist) => (
              <TherapistCard
                key={therapist.id}
                therapist={therapist}
                onSelect={() => setSelectedTherapist(therapist)}
              />
            ))}
          </Grid>
        </>
      ) : (
        <ChatWindow
          therapist={selectedTherapist}
          onClose={() => setSelectedTherapist(null)}
        />
      )}
    </Flex>
  );
}
