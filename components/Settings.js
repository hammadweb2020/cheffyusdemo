import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Select,
  Divider,
  Grid,
  GridItem,
  Textarea,
} from "@chakra-ui/react";
import styled from "styled-components";
import CustomRadio from "./hooks/customRadio";

import { FileUploader } from "react-drag-drop-files";
const fileTypes = ["JPG", "PNG", "GIF"];

const Settings = () => {
  return (
    <>
      <StyledLogo
        pl={40}
        pr={40}
        gridAutoFlow="column"
        gridTemplateColumns="1fr  fit-content(40%)"
        gap="8"
        width="full"
        align="top"
        justifyContent="center"
        background="#e4e4e4;"
        paddingTop="50px"
        paddingBottom="50px"
        alignContent="center"
        alignItems="start"
      >
        <GridItem
          p={6}
          background="white"
          borderRadius="10"
          position="relative"
          top="-10%"
        >
          <Box textAlign="center">
            <Heading fontSize="20">Edit Profile</Heading>
            <Divider p="2" />
            <Box my={4} textAlign="left">
              <form>
                <FormControl>
                  <FormLabel>Full Name</FormLabel>
                  <Input type="text" placeholder="Enter your full name" />
                </FormControl>
                <FormControl mt={6}>
                  <FormLabel>Email</FormLabel>
                  <Input type="email" placeholder="Enter your email ID." />
                </FormControl>

                <FormControl mt={6}>
                  <FormLabel>Phone number</FormLabel>
                  <Input type="tel" placeholder="(208) 555-0112" />
                </FormControl>

                <FormControl mt={6}>
                  <FormLabel>Hobbie</FormLabel>

                  <Select placeholder="Select option">
                    <option value="Music, Sports, Traveling">
                      Music, Sports, Traveling
                    </option>
                    <option value="Reading">Reading</option>
                    <option value="Play Games">Play Games</option>
                  </Select>
                </FormControl>

                <FormControl mt={6}>
                  <FormLabel>Occupation</FormLabel>

                  <Select placeholder="Select option">
                    <option value="Doctor">Doctor</option>
                    <option value="Teacher">Teacher</option>
                    <option value="Student">Student</option>
                  </Select>
                </FormControl>
                <FormControl mt={6}>
                  <FormLabel>BIO</FormLabel>
                  <Textarea placeholder="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint." />
                </FormControl>

                <FormControl mt={6}>
                  <FormLabel>Date of Birth</FormLabel>
                  <Input type="date" placeholder="14 july 1992" />
                </FormControl>
                <FormControl mt={6}>
                  <FormLabel>City</FormLabel>
                  <Input type="text" placeholder="City" />
                </FormControl>

                <FormControl mt={6}>
                  <FormLabel>Who you are</FormLabel>

                  <CustomRadio />
                </FormControl>
                <FormControl mt={6}>
                  <Button
                    size="md"
                    height="48px"
                    width="200px"
                    border="2px"
                    backgroundColor="#657ADC"
                    colorScheme="blue"
                    color="white"
                  >
                    Save
                  </Button>
                </FormControl>
              </form>
            </Box>
          </Box>
        </GridItem>

        <GridItem
          p={6}
          background="white"
          borderRadius="10"
          position="relative"
          top="-10%"
        >
          <Box textAlign="center">
            <Heading fontSize="20">Verify your profile</Heading>
            <Divider p="2" />
            <Box my={4} textAlign="left">
              <form>
                <FormControl mt={6}>
                  <FormLabel>
                    Select your Government id to verify your profile
                  </FormLabel>

                  <Select placeholder="">
                    <option value="">SELECT DOCUMENTS</option>
                    <option value="ID Card">ID Card</option>
                    <option value="License">License</option>
                  </Select>
                </FormControl>
                <FormControl mt={6}>
                  <FileUploader
                    multiple={true}
                   
                    name="file"
                    types={fileTypes}
                  />
                </FormControl>

                <Heading mt="2" color="#F26465" fontSize="13px">
                  Note : you need upload selfie with document and document copy
                </Heading>

                <FormControl mt={6}>
                  <Button
                    size="md"
                    height="48px"
                    width="200px"
                    border="2px"
                    backgroundColor="#657ADC"
                    colorScheme="blue"
                    color="white"
                  >
                    Submit
                  </Button>
                </FormControl>
              </form>
            </Box>
          </Box>
        </GridItem>
      </StyledLogo>
    </>
  );
};

const StyledLogo = styled(Grid)`
  @media only screen and (max-width: 960px) {
    grid-auto-flow: row;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 20px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`;

export default Settings;
