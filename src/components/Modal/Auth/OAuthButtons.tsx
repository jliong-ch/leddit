import { Button, Flex, Image } from "@chakra-ui/react";
import { FC } from "react";

const OAuthButtons: FC = () => {
  return (
    <Flex direction="column" width="100%" mb={4}>
      <Button variant="oauth" mb="10px">
        <Image src="/images/googlelogo.png" height="1.5em" mr={4} />
        Continue With Google
      </Button>
      <Button variant="oauth">Some other provider</Button>
    </Flex>
  );
};

export default OAuthButtons;
