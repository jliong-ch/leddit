import { auth, firestore } from "@/src/firebase/clientApp";
import { Button, Flex, Image, Text } from "@chakra-ui/react";
import { User } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { FC, useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

const OAuthButtons: FC = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  // const createUserDocument = async (user: User) => {
  //   const userDocRef = doc(firestore, "users", user.uid);
  //   await setDoc(userDocRef, JSON.parse(JSON.stringify(user)));
  // }

  // useEffect(() => {
  //   if (user) createUserDocument(user.user);
  // }, [user])

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
