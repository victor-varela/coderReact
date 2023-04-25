import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Text, Divider, Button, ButtonGroup, Image, Box } from '@chakra-ui/react'
import { Counter } from '../Counter/Counter'
export const ItemDetail = ({ item }) => {
  console.log("estoy en itemDetail")
  console.log(item)
  return (
    <>
      {<Card maxW='sm' m="auto" align="center" >
        <CardBody >
          <Image
            src={item.image}
            alt=""
            borderRadius='lg'
          />

          <Stack mt='6' spacing='3'>
            <Heading size='md'>{item.title}</Heading>
            <Text>
              {item.description}
            </Text>
            <Text color='blue.600' fontSize='2xl'>
              ${item.price}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2'>
            <Button variant='solid' colorScheme='blue'>
              Agregar al Carrito
            </Button>
            <Counter/>
          </ButtonGroup>
        </CardFooter>
      </Card>}
    </>
  )
}
