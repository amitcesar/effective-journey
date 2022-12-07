import firestore from "@react-native-firebase/firestore";
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
import { useState } from "react";

export function SignUp() {
  const [name, setName] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [bornDate, setBornDate] = useState("");
  const [motherName, setMotherName] = useState("");

  const handleRegisterUser = async () => {
    firestore().collection("super-users").add({
      name,
      login,
      password,
      phone,
      bornDate,
      motherName,
      status: false,
      createdAt: firestore.FieldValue.serverTimestamp(),
      alteredAt: firestore.FieldValue.serverTimestamp(),
    });
  };

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
            onChangeText={setName}
            label="Nome"
            placeholder="Nome"
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Input label="Login" placeholder="Login" autoCapitalize="none" />

          <Input
            onChangeText={setPassword}
            label="Senha"
            placeholder="Senha"
            keyboardType="email-address"
            autoCapitalize="none"
            type="password"
          />
          <Input
            label="Telefone"
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={setPhone}
          />
          <Input
            label="Data de Nascimento"
            placeholder="Ano que você nasceu"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={setBornDate}
          />

          <Input
            label="Nome da Mãe"
            placeholder="o nome da sua mãe"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={setMotherName}
          />

          <Button title="Cadastrar" onPress={handleRegisterUser} />
        </VStack>
      </ScrollView>
    </VStack>
  );
}
