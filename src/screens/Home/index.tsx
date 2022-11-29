import { Center, Heading, VStack, StatusBar } from "native-base";

export function Home() {
  return (
    <VStack flex={1} px={10} pb={16} bg="gray.700">
      <StatusBar barStyle="light-content" />
      <Center my={24} w="100%">
        <Heading color={"white"} fontFamily="body">
          Home
        </Heading>
      </Center>
    </VStack>
  );
}
