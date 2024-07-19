import { authModalState } from "@/src/atoms/authModalAtom";
import { auth } from "@/src/firebase/clientApp";
import { Button, Divider, Flex, Image, Input, Text } from "@chakra-ui/react";
import { FC, FormEvent, useState } from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { useRecoilState } from "recoil";

interface ResetPasswordProps {}

const ResetPassword: FC<ResetPasswordProps> = () => {
  const [modalState, setModalState] = useRecoilState(authModalState);
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const onSubmit = async (event: FormEvent) => {
    setSuccess(false);
    event.preventDefault();

    await sendPasswordResetEmail(email);
    setSuccess(true);
  };

  return (
    <Flex flexDirection="column" alignItems="center">
      <Image src="/images/redditFace.svg" height="3em" m="1rem" />
      <Text fontWeight={700} fontSize="1.1em">
        Reset your password
      </Text>
      <Text textAlign="center" m={4}>
        Enter the email associated with your account and we'll send you a reset
        link
      </Text>
      {success && <Text color="green" mb={4}>A reset request has been sent to your email</Text>}
      <form onSubmit={onSubmit}>
        <Input
          name="email"
          placeholder="email"
          type="email"
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
          onChange={onChange}
        />
        <Button type="submit" width="100%" mt={2} mb={2} isLoading={sending}>
          Reset Password
        </Button>
        <Flex justifyContent="center">
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
            LOGIN
          </Text>
          <Flex height="1em" margin="0.2em 1em 1em">
            <Divider orientation="vertical" />
          </Flex>
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
    </Flex>
  );
};

export default ResetPassword;
