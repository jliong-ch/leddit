import { authModalState } from "@/src/atoms/authModalAtom";
import { Button, Flex, Input, Text } from "@chakra-ui/react";
import { FC, useState } from "react";
import { useRecoilState } from "recoil";

interface LoginProps {}

const Login: FC<LoginProps> = () => {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const [modalState, setModalState] = useRecoilState(authModalState);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  const onSubmit = () => {};

  return (
    <form onSubmit={onSubmit}>
      <Input
        name="email"
        placeholder="email"
        type="email"
        onChange={onChange}
        mb={2}
        fontSize="10pt"
        _placeholder={{ color: "gray.500" }}
        _hover={{
          bg: "white",
          border: "1px solid",
          borderColor: "blue.500",
        }}
        _focus={{
          outline: "none",
          bg: "white",
          border: "1px solid",
          borderColor: "blue.500",
        }}
        bg="gray.50"
      />
      <Input
        name="password"
        placeholder="password"
        type="password"
        onChange={onChange}
        mb={4}
        fontSize="10pt"
        _placeholder={{ color: "gray.500" }}
        _hover={{
          bg: "white",
          border: "1px solid",
          borderColor: "blue.500",
        }}
        _focus={{
          outline: "none",
          bg: "white",
          border: "1px solid",
          borderColor: "blue.500",
        }}
        bg="gray.50"
      />

      <Flex justify="center" gap={2} mb={2}>
        <Button width="100%" type="submit">
          Log In
        </Button>
        <Button
          width="100%"
          variant="outline"
          onClick={() => {
            setModalState({
              ...modalState,
              open: false,
            });
          }}
        >
          Cancel
        </Button>
      </Flex>
      <Flex fontSize="9pt" justifyContent="center">
        <Text mr={1}>New here?</Text>
        <Text
          color="blue.500"
          fontWeight={700}
          cursor="pointer"
          onClick={() => {
            setModalState({
              ...modalState,
              view: "signup",
            });
          }}
        >
          SIGN UP
        </Text>
      </Flex>
    </form>
  );
};

export default Login;
