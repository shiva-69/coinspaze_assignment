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
  useToast,
  Spinner
} from "@chakra-ui/react";


export const Bad = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  if(loading){
    return  <Flex align="center" justify="center" mt="200px" ml="20%"> <Spinner thickness='4px'
    speed='0.65s'
    emptyColor='gray.200'
    color='blue.500'
    size='xl'/></Flex>
  }

    return <>
        <Button colorScheme='teal' onClick={onOpen}>Make Payment</Button>
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
              setLoading(true)
              setTimeout(()=>{
                setLoading(false);
                setError(true);
              }, 1000)
              setTimeout(()=> setError(false), 1500)
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
                        <option disabled value="">Select an Option</option>
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
                    Continue
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
        error ? toast({
          title: '400-Bad Request',
          description: "Bad Request",
          position: 'top',
          status: 'error',
          duration: 4000,
          isClosable: true,
      }) : <></>
      }
  </>
}