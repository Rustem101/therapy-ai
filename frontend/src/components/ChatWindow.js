import {
  Flex,
  Box,
  Text,
  Input,
  Button,
  Avatar,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";

const ChatWindow = ({ therapist, onClose }) => {
  const bgGradient = useColorModeValue(
    "linear(to-b, blue.100, purple.100)",
    "linear(to-b, gray.800, gray.900)"
  );
  const messageBg = useColorModeValue("white", "gray.700");
  const aiMessageBg = useColorModeValue("blue.50", "blue.900");

  return (
    <Flex
      direction="column"
      w="100%"
      maxW="800px"
      h="80vh"
      bg={useColorModeValue("white", "gray.800")}
      borderRadius="2xl"
      boxShadow="xl"
      overflow="hidden"
    >
      {/* Chat Header */}
      <Flex
        align="center"
        p={4}
        bg={useColorModeValue("gray.50", "gray.700")}
        borderBottomWidth="1px"
      >
        <IconButton
          icon={<ArrowBackIcon />}
          onClick={onClose}
          mr={4}
          borderRadius="lg"
        />
        <Avatar src={therapist.photo} name={therapist.name} mr={4} />
        <Text fontSize="xl" fontWeight="bold">
          {therapist.name}
        </Text>
      </Flex>

      {/* Chat Messages */}
      <Flex direction="column" flex={1} p={4} overflowY="auto" bg={bgGradient}>
        {/* Placeholder AI Message */}
        <Flex mb={4} justify="flex-start">
          <Box bg={aiMessageBg} p={4} borderRadius="xl" maxW="70%">
            <Text>Hello! How can I help you today?</Text>
          </Box>
        </Flex>
      </Flex>

      {/* Message Input */}
      <Flex p={4} borderTopWidth="1px">
        <Input placeholder="Type your message..." borderRadius="lg" mr={4} />
        <Button colorScheme="blue" borderRadius="lg">
          Send
        </Button>
      </Flex>
    </Flex>
  );
};

export default ChatWindow;
