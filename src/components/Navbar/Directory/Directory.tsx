import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { FC } from "react";
import { TiHome } from "react-icons/ti";
import Community from "./Community";

const Directory: FC = () => {
  return (
    <Menu>
      <MenuButton
        borderRadius={4}
        padding="10px 6px"
        ml={{ base: 1, md: 2 }}
        _hover={{ outline: "1px solid", outlineColor: "gray.200" }}
      >
        <Flex
          align="center"
          justify="space-between"
          width={{ base: "auto", lg: "150px" }}
        >
          <Flex align="center">
            <Icon mr={2} as={TiHome} fontSize="1.8em" />
            <Text
              fontWeight={600}
              fontSize="1.1em"
              display={{ base: "none", lg: "flex" }}
            >
              Home
            </Text>
          </Flex>
          <ChevronDownIcon />
        </Flex>
      </MenuButton>
      <MenuList>
        <Community />
      </MenuList>
    </Menu>
  );
};

export default Directory;
