import React from "react";
import { Formik, Field } from "formik";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  VStack,
  Select,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

export const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Make Payment</Button>
      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}  scrollBehavior="inside">
        <ModalOverlay />
        
        <ModalContent h="70vh" p="0px">
        <ModalCloseButton />
          <Flex bg="gray.100" align="center" justify="center" h="100%" w="100%" >
            <Box bg="white" p={6} rounded="md" w={80}>
              <Formik
                initialValues={{
                  email: "",
                  from: "",
                  amount : null,
                  description: ""
                }}
                onSubmit={(values) => {
                  alert(JSON.stringify(values, null, 3));
                }}
              >
                {({ handleSubmit, errors, touched }) => (
                  <form onSubmit={handleSubmit}>
                    <VStack spacing={4} align="flex-start">
                      <FormControl isRequired>
                        <FormLabel htmlFor="email">To : </FormLabel>
                        <Field
                          as={Input}
                          id="email"
                          name="email"
                          type="email"
                          variant="filled"
                          placeholder = "Email Address"
                        />
                      </FormControl>
                        <FormControl isRequired>
                        <FormLabel htmlFor="from">From</FormLabel>
                        <Field
                          as={Select}
                          id="from"
                          name="from"
                          type="from"
                          variant="filled"
                        >
                            <option value='option0' defaultValue></option>
                            <option value='option1' >BTC</option>
                            <option value='option2' >ETH</option>
                        </Field>
                        </FormControl>
                        <FormControl isRequired
                        isInvalid={!!errors.amount && touched.amount}
                      >
                        <FormLabel htmlFor="amount">Amount</FormLabel>
                        <Field
                          as={Input}
                          id="amount"
                          name="amount"
                          type="number"
                          variant="filled"
                          validate={(value) => {
                            let error;

                            if (value < 0) {
                              error =
                                "Enter a valid amount";
                            }

                            return error;
                          }}
                        />
                        <FormErrorMessage>{errors.amount}</FormErrorMessage>
                      </FormControl>
                      <FormControl >
                        <FormLabel htmlFor="description">Description</FormLabel>
                        <Field
                          as={Input}
                          id="description"
                          name="description"
                          type="text"
                          variant="filled"
                        />
                        </FormControl>
                        <Button type="submit" colorScheme="purple" width="full">
                        {console.log(errors)}
                        Login
                      </Button>
                    </VStack>
                  </form>
                )}
              </Formik>
            </Box>
          </Flex>
        </ModalContent>
      </Modal>
    </>
  );
};
