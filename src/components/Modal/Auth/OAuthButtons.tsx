import { auth } from "@/src/firebase/clientApp";
import { Button, Flex, Image, Text } from "@chakra-ui/react";
import { FC } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

const OAuthButtons: FC = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  return (
    <Flex direction="column" width="100%" >
      <Button variant="oauth" mb="10px" onClick={() => signInWithGoogle()}>
        <Image src="/images/googlelogo.png" height="1.5em" mr={4} />
        Continue With Google
      </Button>
      <Button variant="oauth" mb="10px">Some other provider</Button>
      <Text color="red" textAlign="center">{error?.message}</Text>
    </Flex>
  );
};

export default OAuthButtons;
