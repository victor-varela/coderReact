import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Text, Divider, Button, ButtonGroup, Image, Box } from '@chakra-ui/react'
import { Counter } from '../Counter/Counter'
import { useState } from 'react'
import { Link } from 'react-router-dom'
export const ItemDetail = ({ item }) => {
  const [isCant, setIsCant]= useState(false)
  const onAdd=(cantidad)=>{
    console.log("la cantidad seleccionada es:", cantidad)
    setIsCant(true)
  }
  return (
    <>
      {!isCant ?
        <Card maxW='sm' m="auto" align="center" >
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
            
            <Counter onAdd={onAdd}/>
          </ButtonGroup>
        </CardFooter>
      </Card>
      :
      <>
        <Card maxW='sm' m="auto" align="center" >
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
            <Link to="/cart">
              <Button>Terminar Compra</Button>   
            </Link>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </>}
    </>
  )
}
