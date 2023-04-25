//AFTER se puede hacer un fetch son settimeout??? tengo 2 horas libres por dia, como puedo aprender? que me recomiendan?
import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Text, Divider, Button, ButtonGroup, Image, CircularProgress } from '@chakra-ui/react'
import { mFetch } from "../../assets/services/mFetch"
import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useParams } from "react-router-dom"
export const ItemlistContainer = ({ greeting }) => {
  const [products, setProducts] = useState([])
  const [isloading, setIsLoading] = useState(true)
  const { cid } = useParams()
  //hacer llamada a la api desde otro componente -LISTO
  //hacer itemlist/counter
  useEffect(() => {
    setTimeout(() => {
      if (!cid) {
        mFetch()
          .then(products => {
            setProducts(products)
          })//aca esta la verdad de la milanesa, aca guardo el valor de products y lo hago persistente porque es un estado declarado en el componente
          .finally(() => setIsLoading(false))
      }
      else {
        mFetch()
          .then(products => {
            setProducts(products.filter(producto => producto.category === cid))
          })//aca esta la verdad de la milanesa, aca guardo el valor de products y lo hago persistente porque es un estado declarado en el componente
          .finally(() => setIsLoading(false))
      }

    }, 2000)


  }, [cid])
  console.log(products)//¿me los esta guardando, como?
  //Aca debe estar la llamada a la API porque es un componente contenedor, y estos tipos de componenetes son los que manejan la logica y los estados y las llamadas a los servicios externos (API). Estas llamadas pueden causar efectos secundarios y por ello se manejan con useEffect
  return (
    <>
      <h1>{greeting}</h1>
      {isloading ?
        <CircularProgress isIndeterminate color='blue.300' value={30} size='120px' />
        : products.map(({ id, price, title, image }) =>

          <Card maxW='sm' m="auto" mb={100} align="center" key={id} >
            <CardBody >

              <Image
                src={image}
                alt=""
                borderRadius='lg'
              />

              <Stack mt='6' spacing='3'>
                <Heading size='md'>{title}</Heading>

                <Text color='blue.600' fontSize='2xl'>
                  ${price}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing='2'>
                <Button variant='solid' colorScheme='blue'>
                  Comprar
                </Button>
                {/* //añadir Link de react router DOM */}
                <Link to={`/detail/${id}`}>
                  <Button variant='ghost' colorScheme='blue'>
                    Ver Detalles
                  </Button>
                </Link>
              </ButtonGroup>
            </CardFooter>
          </Card>)}
    </>
  )
}
