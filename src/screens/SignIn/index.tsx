import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { Center, Heading, Text, VStack } from "native-base";

import { useNavigation } from "@react-navigation/native";

export function SignIn() {
  const { navigate } = useNavigation();

  function handleToHomeScreen() {
    navigate("home");
  }
  return (
    <VStack flex={1} px={10} pb={16} bg="gray.700">
      <Center my={24}>
        <Heading color={"white"} fontFamily="body">
          Bem Vindo
        </Heading>
        <Text color="gray.100" fontSize="sm">
          Se cadastre em nosso app ou entre com sua conta.
        </Text>
      </Center>

      <Center>
        <Heading color="gray.100" fontSize="xl" mb={6} fontFamily="heading">
          Acesse a conta
        </Heading>

        <Input
          placeholder="email"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Input placeholder="Senha" secureTextEntry />
        <Button title="Acessar" onPress={handleToHomeScreen} />
      </Center>

      <Center mt={24}>
        <Text color="gray.100" fontSize="sm" mb={3} fontFamily="body">
          Ainda não tem acesso?
        </Text>

        <Button title="Criar Conta" variant="outline" onPress={() => {}} />
      </Center>
    </VStack>
  );
}
