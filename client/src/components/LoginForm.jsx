import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { loginUser } from "../utils/api";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginUser({ username, password });
      navigate("/home");
    } catch (err) {
      setError("Invalid username or password");
    }
  };

  return (
    <Box
      p={4}
      maxWidth="400px"
      borderWidth={1}
      borderRadius="lg"
      boxShadow="lg"
    >
      <VStack as="form" spacing={4} onSubmit={handleSubmit}>
        <FormControl id="username" isRequired>
          <FormLabel>Username</FormLabel>
          <Input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        {error && <Text color="red.500">{error}</Text>}
        <Button
          type="submit"
          colorScheme="teal"
          isDisabled={!username || !password}
        >
          Login
        </Button>
      </VStack>
    </Box>
  );
};

export default LoginForm;
