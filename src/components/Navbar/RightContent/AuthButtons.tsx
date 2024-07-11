import { Button } from "@chakra-ui/react";
import { FC } from "react";

interface AuthButtonsProps {
  // onOpen: () => {

  // };
}

const AuthButtons: FC<AuthButtonsProps> = () => {
  return (
    <>
      <Button
        variant="outline"
        height="3em"
        // note: here the sm means anything >= sm breakpoint
        // so base means anything < sm breakpoint
        display={{ base: "none", sm: "flex" }}
        width={{ base: "7em", md: "8em" }}
        mr={2}
        // onClick={}
      >
        Log In
      </Button>
      <Button
        height="3em"
        display={{ base: "none", sm: "flex" }}
        width={{ base: "7em", md: "8em" }}
        mr={2}
      >
        Sign Up
      </Button>
    </>
  );
};

export default AuthButtons;
