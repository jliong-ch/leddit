import { Flex, Icon } from "@chakra-ui/react";
import { FC } from "react";
import { BsArrowUpRightCircle, BsChatDots } from "react-icons/bs";
import { GrAdd } from "react-icons/gr";
import {
  IoFilterCircleOutline,
  IoNotificationsOutline,
  IoVideocamOutline,
} from "react-icons/io5";

const Icons: FC = () => {
  return (
    <Flex>
      <Flex
        display={{ base: "none", md: "flex" }}
        align="center"
        borderRight="1px solid"
        borderColor="gray.200"
      >
        <Flex
          mr={1.5}
          ml={0.5}
          padding={2}
          cursor="pointer"
          borderRadius={4}
          _hover={{ bg: "gray.200" }}
        >
          <Icon as={BsArrowUpRightCircle} fontSize="1.5em" />
        </Flex>
        <Flex
          mr={1.5}
          ml={0.5}
          padding={2}
          cursor="pointer"
          borderRadius={4}
          _hover={{ bg: "gray.200" }}
        >
          <Icon as={IoFilterCircleOutline} fontSize="1.6em" />
        </Flex>
        <Flex
          mr={1.5}
          ml={0.5}
          padding={2}
          cursor="pointer"
          borderRadius={4}
          _hover={{ bg: "gray.200" }}
        >
          <Icon as={IoVideocamOutline} fontSize="1.8em" />
        </Flex>
      </Flex>
      <>
        <Flex
          mr={1.5}
          ml={0.5}
          padding={2}
          paddingLeft={3}
          cursor="pointer"
          borderRadius={4}
          _hover={{ bg: "gray.200" }}
        >
          <Icon as={BsChatDots} fontSize="1.5em" />
        </Flex>
        <Flex
          mr={1.5}
          ml={0.5}
          padding={2}
          cursor="pointer"
          borderRadius={4}
          _hover={{ bg: "gray.200" }}
        >
          <Icon as={IoNotificationsOutline} fontSize="1.5em" />
        </Flex>
        <Flex
          display={{ base: "none", md: "flex" }}
          mr={1.5}
          ml={0.5}
          padding={2}
          cursor="pointer"
          borderRadius={4}
          _hover={{ bg: "gray.200" }}
        >
          <Icon as={GrAdd} fontSize="1.5em" />
        </Flex>
      </>
    </Flex>
  );
};

export default Icons;
