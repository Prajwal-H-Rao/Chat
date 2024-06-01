import React, { useState } from 'react'
import {
    VStack,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    Button,
  } from "@chakra-ui/react";

const Login = () => {
    const [email, setEmail] = useState();
    const [password,setPassword]=useState();
    const [show1, setShow1] = useState(false);

    const submitHandler = () =>{

    }
  
    return (
      <>
        <VStack spacing={"5px"} color={"white"}>
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
                value={password}
                onChange={e=>setPassword(e.target.value)}
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
          
          <Button
          colorScheme="blue"
          width="100%"
          style={{marginTop:15}}
          onClick={submitHandler}>
              Login
          </Button>
          <Button 
          variant="solid"
          colorScheme='red'
          width="100%"
          onClick={()=>{
            setEmail("guest@gmail.com")
            setPassword("123456")
          }}
          >Sign in as Guest</Button>
        </VStack>
      </>
    );
}

export default Login