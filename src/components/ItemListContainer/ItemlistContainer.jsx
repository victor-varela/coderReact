//AFTER se puede hacer un fetch son settimeout??? tengo 2 horas libres por dia, como puedo aprender? que me recomiendan?
import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Text, Divider, Button, ButtonGroup, Image, Box } from '@chakra-ui/react'
import { mFetch } from "../../assets/services/mFetch"
import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useParams } from "react-router-dom"


export const ItemlistContainer = ({ greeting }) => {
  const [products, setProducts] = useState([])
  const {cid}= useParams()
  //hacer llamada a la api desde otro componente -LISTO
  //hacer itemlist/counter
  useEffect(() => {
    setTimeout(() => {
    if(!cid){
      mFetch()
        .then(products => {
          setProducts(products)
        })//aca esta la verdad de la milanesa, aca guardo el valor de products y lo hago persistente porque es un estado declarado en el componente
    }
    else{
      mFetch()
        .then(products => {
          setProducts(products.filter(producto =>producto.category === cid))
        })//aca esta la verdad de la milanesa, aca guardo el valor de products y lo hago persistente porque es un estado declarado en el componente
        console.log(products)
    }
      


    }, 5000)


  }, [cid])
  console.log(products)//¿me los esta guardando, como?
  //Aca debe estar la llamada a la API porque es un componente contenedor, y estos tipos de componenetes son los que manejan la logica y los estados y las llamadas a los servicios externos (API). Estas llamadas pueden causar efectos secundarios y por ello se manejan con useEffect
  return (
    <>
      {products.map(({ id, price, title, descprition, image }) =>

        <Card maxW='sm' key={id} >
          <CardBody >
            
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
              {/* //añadir Link de react router DOM */}
              <Link to={`/detail/${id}`}>
                <Button variant='ghost' colorScheme='blue'>
                  See details
                </Button>
              </Link>
            </ButtonGroup>
          </CardFooter>
        </Card>)}
      <h1>{greeting}</h1>
    </>
  )
}
