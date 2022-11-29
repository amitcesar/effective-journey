import { Center, Heading, VStack } from "native-base";

export function SignUp() {
  return (
    <VStack flex={1} px={10} pb={16} bg="gray.700">
      <Center my={24}>
        <Heading color={"white"} fontFamily="body">
          Tela de Cadastro
        </Heading>
      </Center>
    </VStack>
  );
}
