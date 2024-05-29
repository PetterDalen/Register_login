import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import RegistrationForm from "../components/RegistrationForm";

const RegistrationPage = () => {
  return (
    <Box p={4}>
      <Heading as="h2" mb={4}>
        Register
      </Heading>
      <RegistrationForm />
    </Box>
  );
};

export default RegistrationPage;
