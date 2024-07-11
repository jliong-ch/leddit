import { Flex, Image } from "@chakra-ui/react";
import { FC } from "react";
import SearchInput from "./SearchInput";
import RightContent from "./RightContent/RightContent";

interface NavBarProps {}

const NavBar: FC<NavBarProps> = () => {
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
      <RightContent />
    </Flex>
  );
};

export default NavBar;
