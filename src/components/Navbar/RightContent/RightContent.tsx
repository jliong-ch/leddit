import { Button, ButtonGroup, Flex } from "@chakra-ui/react";
import { FC } from "react";
import AuthButtons from "./AuthButtons";
import AuthModal from "../../Modal/AuthModal";

interface RightContentProps {}

const RightContent: FC<RightContentProps> = () => {
  return (
    <>
      <AuthModal />
      <Flex justify="center" align="center">
        <AuthButtons />
      </Flex>
    </>
  );
};

export default RightContent;
