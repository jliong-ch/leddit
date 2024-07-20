import { Flex } from "@chakra-ui/react";
import { User } from "firebase/auth";
import { FC } from "react";
import AuthModal from "../../Modal/Auth/AuthModal";
import AuthButtons from "./AuthButtons";
import Icons from "./Icons";
import UserMenu from "./UserMenu";

interface RightContentProps {
  user?: User | null;
}

const RightContent: FC<RightContentProps> = ({ user }) => {
  return (
    <>
      <AuthModal />
      <Flex justify="center" align="center">
        {user ? (
          // <Button onClick={() => signOut(auth)}>Log Out</Button>
          <Icons />
        ) : (
          <AuthButtons />
        )}
        <UserMenu user={user}/>
      </Flex>
    </>
  );
};

export default RightContent;
