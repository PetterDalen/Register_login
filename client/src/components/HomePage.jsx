import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Heading, Text, VStack } from "@chakra-ui/react";
import { logoutUser } from "../utils/api";

const HomePage = ({ username }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logoutUser();
    navigate("/login");
  };

  return (
    <Box p={4}>
      <VStack spacing={4}>
        <Heading>Welcome, {username}</Heading>
        <Button colorScheme="teal" onClick={handleLogout}>
          Log Out
        </Button>
      </VStack>
    </Box>
  );
};

export default HomePage;
