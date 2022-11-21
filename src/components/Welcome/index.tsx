import { Text } from "react-native";

type Props = {
  title: string;
};

export function Welcome({ title }: Props) {
  return (
    <>
      <Text>{title}</Text>
    </>
  );
}
