//AFTER se puede hacer un fetch son settimeout??? tengo 2 horas libres por dia, como puedo aprender? que me recomiendan?
import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Text, Divider, Button, ButtonGroup, Image } from '@chakra-ui/react'
import { mFetch } from "../../assets/services/mFetch"
import { useEffect, useState } from 'react'
export const ItemlistContainer = ({ greeting }) => {
  const [products, setProducts] = useState([])
  //hacer llamada a la api desde otro componente
  //hacer itemlist/counter
  useEffect(() => {
    setTimeout(() => {
      mFetch()
        .then(products => {
          setProducts(products)
        })//aca esta la verdad de la milanesa, aca guardo el valor de products y lo hago persistente porque es un estado declarado en el componente


    }, 5000)


  }, [])
  console.log(products)//¿me los esta guardando, como?
  //Aca debe estar la llamada a la API porque es un componente contenedor, y estos tipos de componenetes son los que manejan la logica y los estados y las llamadas a los servicios externos (API). Estas llamadas pueden causar efectos secundarios y por ello se manejan con useEffect
  return (
    <>
      {products.map(({ id, price, title, descprition, image }) =>
        <Card maxW='sm' key={id}>
          <CardBody>
            <Image
              src={image}
              alt=""
              borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>{title}</Heading>
              <Text>
                {descprition}
              </Text>
              <Text color='blue.600' fontSize='2xl'>
                ${price}
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing='2'>
              <Button variant='solid' colorScheme='blue'>
                Buy now
              </Button>
              <Button variant='ghost' colorScheme='blue'>
                Add to cart
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>)}

      <h1>{greeting}</h1>
    </>
  )
}
