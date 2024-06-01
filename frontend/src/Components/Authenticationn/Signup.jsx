import React, { useState } from "react";
import {
  VStack,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
const Signup = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [pic, setPic] = useState();

  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  return (
    <>
      <VStack spacing={"5px"} color={"white"}>
        <FormControl id="firstName" isRequired color={"black"}>
          <FormLabel>Name</FormLabel>
          <Input
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormControl>
        <FormControl id="email" isRequired color={"black"}>
          <FormLabel>Email</FormLabel>
          <Input
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl id="Password" isRequired color={"black"}>
          <FormLabel>Password</FormLabel>
          <InputGroup>
            <Input
              placeholder="Enter Your Password"
              type={show1 ? "text" : "password"}
            />
            <InputRightElement width={"4.5rem"}>
              <Button
                h="1.75rem"
                size={"sm"}
                onClick={() => setShow1((value) => !value)}
              >
                {show1 ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <FormControl id="Password" isRequired color={"black"}>
          <FormLabel>Confirm Password</FormLabel>
          <InputGroup>
            <Input
              placeholder="Please confirm your password"
              type={show2 ? "text" : "password"}
            />
            <InputRightElement width={"4.5rem"}>
              <Button
                h="1.75rem"
                size={"sm"}
                onClick={() => setShow2((value) => !value)}
              >
                {show2 ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
      </VStack>
    </>
  );
};

export default Signup;
