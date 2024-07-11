import { authModalState } from "@/src/atoms/authModalAtom";
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import { FC } from "react";
import { useRecoilState } from "recoil";

interface AuthModalProps {
  
}
 
const AuthModal: FC<AuthModalProps> = () => {
  const [modalState, setModalState] = useRecoilState(authModalState);
  
  const handleClose = () => {
    setModalState((prev) => ({
      ...prev,
      open: false,
    }));
  };
  return (
    <>
      <Modal isOpen={modalState.open} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            modal body
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={handleClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
 
export default AuthModal;