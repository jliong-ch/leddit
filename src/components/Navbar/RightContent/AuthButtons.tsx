import { authModalState } from "@/src/atoms/authModalAtom";
import { Button } from "@chakra-ui/react";
import { FC } from "react";
import { useSetRecoilState } from "recoil";


const AuthButtons: FC = () => {
  const setAuthModalState = useSetRecoilState(authModalState);
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
        onClick={() => {
          setAuthModalState({ open: true, view: "login" });
        }}
      >
        Log In
      </Button>
      <Button
        height="3em"
        display={{ base: "none", sm: "flex" }}
        width={{ base: "7em", md: "8em" }}
        mr={2}
        onClick={() => {
          setAuthModalState({ open: true, view: "signup" });
        }}
      >
        Sign Up
      </Button>
    </>
  );
};

export default AuthButtons;
