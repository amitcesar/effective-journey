import { Header } from "@components/Header";
import {
  Center,
  Heading,
  VStack,
  StatusBar,
  Box,
  HStack,
  Text,
} from "native-base";

export function Home() {
  return (
    <VStack flex={1} px={10} pb={16} bg="gray.700">
      <StatusBar barStyle="light-content" />

      <Heading color="gray.100" fontSize="xl" mt={20} mb={6}>
        Users
      </Heading>
    </VStack>
  );
}
