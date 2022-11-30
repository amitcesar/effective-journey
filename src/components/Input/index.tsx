import {
  Input as NativeBaseInput,
  IInputProps,
  FormControl,
} from "native-base";

type Props = IInputProps & {
  errorMessage?: string | null;
  label?: string | null;
};

export function Input({ errorMessage, label, isInvalid, ...rest }: Props) {
  const invalid = !!errorMessage || isInvalid;
  return (
    <FormControl>
      <FormControl.Label py={1} color="gray.100">
        {label}
      </FormControl.Label>
      <NativeBaseInput
        bg="white"
        h={14}
        px={4}
        marginBottom={4}
        borderWidth={0}
        fontSize="md"
        color="white"
        fontFamily="body"
        placeholderTextColor="gray.200"
        isInvalid={invalid}
        _invalid={{
          borderWidth: 1,
          borderColor: "red.500",
        }}
        _focus={{
          bgColor: "gray.100",
          borderWidth: 1,
          borderColor: "green.500",
        }}
        {...rest}
      />
      <FormControl.ErrorMessage>{errorMessage}</FormControl.ErrorMessage>
    </FormControl>
  );
}
