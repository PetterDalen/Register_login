import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  return (
    <Box p={4}>
      <Heading as="h2" mb={4}>
        Login
      </Heading>
      <LoginForm />
    </Box>
  );
};

export default LoginPage;
