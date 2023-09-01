import React, { useEffect } from "react";
import {
  Container,
  Box,
  Text,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Tab,
} from "@chakra-ui/react";
import LogIn from "../components/auth/LogIn";
import SignUp from "../components/auth/SignUp";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("user-Info"));
    if (!userInfo) {
      navigate("/chats");
    }
  }, [navigate]);
  return (
    <Container maxW={"xl"} centerContent>
      <Box
        d="flex"
        justifyContent={"center"}
        p={3}
        bg={"white"}
        m={"40px 0 15px 0"}
        borderRadius={"lg"}
        borderWidth={"1px"}
      >
        {" "}
        <Text fontSize={"4xl"} fontFamily={"Work sans"}>
          {" "}
          Lets Chat Securely{" "}
        </Text>{" "}
      </Box>
      <Box bg="white" w="100%" p={4} borderRadius={"lg"} borderWidth={"1px"}>
        {" "}
        <Tabs colorScheme="green" size="md" variant="soft-rounded">
          <TabList mb={"1em"}>
            <Tab w="50%">Login</Tab>
            <Tab w="50%">SignUp</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>{<LogIn />}</TabPanel>
            <TabPanel>{<SignUp />}</TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default HomePage;
