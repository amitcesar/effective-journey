import { Button } from "@components/Button";
import { Input } from "@components/Input";
import {
  Box,
  Center,
  FormControl,
  Heading,
  ScrollView,
  VStack,
} from "native-base";

export function SignUp() {
  return (
    <VStack flex={1} px={10} pb={16} bg="gray.700">
      <Center my={24}>
        <Heading color={"white"} fontFamily="body">
          Registre-se
        </Heading>
      </Center>

      <ScrollView w={["300", "300"]} h="80">
        <VStack>
          <Input
            label="Nome"
            placeholder="Nome"
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Input label="Login" placeholder="Login" autoCapitalize="none" />

          <Input
            label="Senha"
            placeholder="Senha"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Input
            label="Telefone"
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Input
            label="Data de Nascimento"
            placeholder="Ano que você nasceu"
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Input
            label="Nome da Mãe"
            placeholder="o nome da sua mãe"
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Button title="Cadastrar" />
        </VStack>
      </ScrollView>
    </VStack>
  );
}
