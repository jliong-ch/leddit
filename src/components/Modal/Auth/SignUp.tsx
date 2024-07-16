import { authModalState } from "@/src/atoms/authModalAtom";
import { auth } from "@/src/firebase/clientApp";
import { FIREBASE_ERROR } from "@/src/firebase/errors";
import { Button, Flex, Input, Text } from "@chakra-ui/react";
import { FC, FormEvent, useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useRecoilState } from "recoil";

const SignUp: FC = () => {
  const [signUpForm, setSignUpForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [modalState, setModalState] = useRecoilState(authModalState);
  const [error, setError] = useState("");

  const [createUserWithEmailAndPassword, user, loading, signUpError] =
    useCreateUserWithEmailAndPassword(auth);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSignUpForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (error) setError("");
    if (signUpForm.confirmPassword !== signUpForm.password) {
      setError("Passwords do not match");
      return;
    }
    if (signUpForm.password.length < 6) {
      setError("Password needs to have 5 or more letters");
      return;
    }
    createUserWithEmailAndPassword(signUpForm.email, signUpForm.password);
  };

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
        name="confirmPassword"
        placeholder="confirm password"
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
      <Text textAlign="center" color="red" fontSize="10pt">
        {error ||
          FIREBASE_ERROR[signUpError?.message as keyof typeof FIREBASE_ERROR]}
      </Text>
      <Flex justify="center" gap={2} m={2}>
        <Button width="100%" type="submit" isLoading={loading}>
          Sign Up
        </Button>
        <Button
          width="100%"
          variant="outline"
          isLoading={loading}
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
        <Text mr={1}>Already a redditor?</Text>
        <Text
          color="blue.500"
          fontWeight={700}
          cursor="pointer"
          onClick={() => {
            setModalState({
              ...modalState,
              view: "login",
            });
          }}
        >
          LOG IN
        </Text>
      </Flex>
    </form>
  );
};

export default SignUp;
