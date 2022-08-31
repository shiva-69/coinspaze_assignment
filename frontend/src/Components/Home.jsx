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
  useToast
} from "@chakra-ui/react";

export const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const [success, setSuccess] = React.useState(false);
  const [error, setError] = React.useState(false);
  return (
    <>
      <Flex minWidth='max-content' alignItems='center' justify="center" mt="10%">
      <Button colorScheme='teal' onClick={onOpen}>Make Payment</Button>
    </Flex>
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
                  amount : "",
                  description: ""
                }}
                onSubmit={(values) => {
                  console.log(values)
                  fetch("https://coinspaze.herokuapp.com", {
                    method: "POST",
                    body: JSON.stringify(values),
                    headers: {
                      "content-type": "application/json"
                    }
                  })
                  .then((res) => {
                    if(res.status == 200){
                      setSuccess(true);
                      setTimeout(()=> {
                        window.location.reload();
                      }, 4000)
                      res.json()
                    }
                    else if(res.status == 401){
                      window.location.reload();
                    }
                    else if(res.status == 400){
                      setError(true);
                      setTimeout(()=> {
                        window.location.reload();
                      }, 4000)
                    }
                  })
                  .then((res) => console.log(res))
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
                            <option value='BTC' >BTC</option>
                            <option value='ETH' >ETH</option>
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
      {
        success ? toast({
          title: 'Success',
          description: "Your details are saved",
          position: 'top',
          status: 'success',
          duration: 4000,
          isClosable: true,
      }) : <></>
      }
      {
        error ? toast({
          title: 'Success',
          description: "Your details are saved",
          position: 'top',
          status: 'success',
          duration: 4000,
          isClosable: true,
      }) : <></>
      }
    </>
  );
};
