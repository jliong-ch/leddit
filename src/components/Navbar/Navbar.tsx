import { Flex, Image } from "@chakra-ui/react";
import { FC } from "react";
import SearchInput from "./SearchInput";
import RightContent from "./RightContent/RightContent";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/src/firebase/clientApp";

interface NavBarProps {}

const NavBar: FC<NavBarProps> = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <Flex bg="white" padding="0 1em" minHeight="4em">
      <Flex alignItems="center">
        <Image src="/images/redditFace.svg" height="2em" />
        <Image
          src="/images/redditText.svg"
          height="3em"
          display={{ base: "none", md: "unset" }}
        />
      </Flex>
      <SearchInput />
      {/* <Directory /> */}
      <RightContent user={user}/>
    </Flex>
  );
};

export default NavBar;
