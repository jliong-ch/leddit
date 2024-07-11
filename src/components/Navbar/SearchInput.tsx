import { SearchIcon } from "@chakra-ui/icons";
import { Flex, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FC } from "react";

interface SearchInputProps {}

const SearchInput: FC<SearchInputProps> = () => {
  return (
    <Flex align="center" flexGrow={1} margin=".5rem">
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.400" />
        </InputLeftElement>
        <Input
          type="tel"
          placeholder="Search Reddit"
          fontSize="0.9em"
          bg='gray.50'
          _placeholder={{ color: "gray.500" }}
          _hover={{
            bg: 'white',
            border: '1px solid',
            borderColor: 'blue.500',
          }}
          _focus={{
            outline: 'none',
            border: '1px solid',
            borderColor: 'blue.500',
          }}

        />
      </InputGroup>
    </Flex>
  );
};

export default SearchInput;
