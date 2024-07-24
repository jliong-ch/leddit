import { auth, firestore } from "@/src/firebase/clientApp";
import {
  Button,
  Checkbox,
  Divider,
  Flex,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { ChangeEvent, FC, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { BsFillEyeFill, BsFillPersonFill } from "react-icons/bs";
import { HiLockClosed } from "react-icons/hi";

interface CreateCommunityModalProps {
  open: boolean;
  handleClose: () => void;
}

const CreateCommunityModal: FC<CreateCommunityModalProps> = ({
  open,
  handleClose,
}) => {
  const [user] = useAuthState(auth);
  const [communityName, setCommunityName] = useState("");
  const [communityType, setCommunityType] = useState("public");
  const [characterCount, setCharacterCount] = useState(21);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const checkAndSetCommunity = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length > 21) return;

    setCharacterCount(21 - event.target.value.length);
    setCommunityName(event.target.value);
  };
  const onCommunityTypeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCommunityType(event.target.value);
  };

  const handleCreateCommunity = async () => {
    if (error) setError("");

    const regex = /[^\w-]+/;
    if (regex.test(communityName) || communityName.length < 3) {
      setError(
        "Community names must be between 3-21 characters, and can only contain alphanumeric characters and underscores"
      );
    }

    // 1. validate community name (taken/valid)
    // 2. Create community document in firestore
    setLoading(true);
    const communityDocRef = doc(firestore, "communities", communityName);
    try {
      const communityDoc = await getDoc(communityDocRef);
      if (communityDoc.exists()) {
        throw new Error("Community name is already taken!");
      }

      // Create community
      await setDoc(communityDocRef, {
        creatorId: user?.uid,
        createdAt: serverTimestamp(),
        numberOfMembers: 1,
        privacyType: communityType,
      }).then(() => {
        handleClose();
      });
    } catch (error: any) {
      setError(error.message);
    }
    setLoading(false);
  };

  return (
    <>
      <Modal isOpen={open} onClose={handleClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize="1.2em" padding=".7em">
            Create a community
          </ModalHeader>
          <ModalCloseButton />
          <Divider />

          <ModalBody padding="1em">
            <Flex flexDirection="column" fontSize={13}>
              <Text fontWeight={600} fontSize={15}>
                Name
              </Text>
              <Text fontWeight={400} color="gray.400" mb={5}>
                Community names including capitalization cannot be changed
              </Text>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <Text color="gray.400">r/</Text>
                </InputLeftElement>
                <Input
                  value={communityName}
                  onChange={checkAndSetCommunity}
                  paddingLeft="1.8em"
                />
              </InputGroup>
              <Text color={characterCount == 0 ? "red" : "gray.400"}>
                {characterCount} Characters remaining
              </Text>
              <Text color="red" margin=".7em 0 2em">
                {error}
              </Text>
              <Text fontWeight={600} fontSize={15} mb={2}>
                Community Type
              </Text>
              <Flex flexDirection="column" gap={2}>
                <Checkbox
                  value="public"
                  isDisabled={loading}
                  onChange={onCommunityTypeChange}
                  isChecked={communityType === "public"}
                >
                  <Flex align="center" fontSize=".8em" gap={2}>
                    <Icon
                      as={BsFillPersonFill}
                      fontSize="16px"
                      color="gray.500"
                    />
                    <Text>Public</Text>
                    <Text color="gray.400">
                      Anyone can view, post, and comment to this community
                    </Text>
                  </Flex>
                </Checkbox>
                <Checkbox
                  value="restricted"
                  isDisabled={loading}
                  onChange={onCommunityTypeChange}
                  isChecked={communityType === "restricted"}
                >
                  <Flex align="center" fontSize=".8em" gap={2}>
                    <Icon as={BsFillEyeFill} fontSize="16px" color="gray.500" />
                    <Text>Restricted</Text>
                    <Text color="gray.400">
                      Anyone can view this community, but only approved users
                      can post
                    </Text>
                  </Flex>
                </Checkbox>
                <Checkbox
                  value="private"
                  isDisabled={loading}
                  onChange={onCommunityTypeChange}
                  isChecked={communityType === "private"}
                >
                  <Flex align="center" fontSize=".8em" gap={2}>
                    <Icon as={HiLockClosed} fontSize="16px" color="gray.500" />
                    <Text>Private</Text>
                    <Text color="gray.400">
                      Only approved users can view and submit to this community
                    </Text>
                  </Flex>
                </Checkbox>
              </Flex>
            </Flex>
          </ModalBody>

          <ModalFooter bg="gray.100" borderRadius="0 0 10px 10px">
            <Button
              variant="outline"
              mr={3}
              onClick={handleClose}
              isLoading={loading}
            >
              Cancel
            </Button>
            <Button isLoading={loading} onClick={handleCreateCommunity}>
              Create Community
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateCommunityModal;
