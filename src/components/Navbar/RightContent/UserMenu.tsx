import { authModalState } from "@/src/atoms/authModalAtom";
import { auth } from "@/src/firebase/clientApp";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Divider,
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { signOut, User } from "firebase/auth";
import { FC } from "react";
import { CgProfile } from "react-icons/cg";
import { FaRedditSquare } from "react-icons/fa";
import { IoSparkles } from "react-icons/io5";
import { MdOutlineLogin } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";
import { useRecoilState, useSetRecoilState } from "recoil";

interface UserMenuProps {
  user?: User | null;
}

const UserMenu: FC<UserMenuProps> = ({ user }) => {
  const setAuthModalState = useSetRecoilState(authModalState);

  return (
    <Menu>
      <MenuButton
        borderRadius={4}
        padding="5px 6px"
        _hover={{ outline: "1px solid", outlineColor: "gray.200" }}
      >
        <Flex align="center">
          {user ? (
            <>
              <Icon
                fontSize="1.8em"
                mr={1}
                color="gray.300"
                as={FaRedditSquare}
              />
              <Flex
                direction="column"
                display={{ base: "none", lg: "flex" }}
                fontSize="10pt"
                align="center"
                mr={6}
              >
                <Text fontWeight={700}>
                  {user?.displayName || user.email?.split("@")[0]}
                </Text>
                <Flex align="center">
                  <Icon as={IoSparkles} color="brand.100" mr={1}/>
                  <Text color="gray.400">1 karma</Text>
                </Flex>
              </Flex>
            </>
          ) : (
            <Icon mr={1} as={VscAccount} fontSize="1.8em" color="gray.300" />
          )}
          <ChevronDownIcon />
        </Flex>
      </MenuButton>
      <MenuList pl={3} pr={3}>
        {user ? (
          <>
            <MenuItem
              fontWeight={700}
              padding={3}
              _hover={{
                bg: "blue.500",
                color: "white",
              }}
            >
              <Flex align="center">
                <Icon fontSize="1.5em" mr={2} as={CgProfile} />
                <Text>Profile</Text>
              </Flex>
            </MenuItem>
            <Divider />
            <MenuItem
              fontWeight={700}
              padding={3}
              onClick={() => {
                signOut(auth);
              }}
              _hover={{
                bg: "blue.500",
                color: "white",
              }}
            >
              <Flex align="center">
                <Icon fontSize="1.5em" mr={2} as={MdOutlineLogin} />
                <Text>Log Out</Text>
              </Flex>
            </MenuItem>
          </>
        ) : (
          <>
            <MenuItem
              fontWeight={700}
              padding={3}
              onClick={() => {
                setAuthModalState({ open: true, view: "login" });
              }}
              _hover={{
                bg: "blue.500",
                color: "white",
              }}
            >
              <Flex align="center">
                <Icon fontSize="1.5em" mr={2} as={MdOutlineLogin} />
                <Text>Log In / Sign Up</Text>
              </Flex>
            </MenuItem>
          </>
        )}
      </MenuList>
    </Menu>
  );
};

export default UserMenu;
