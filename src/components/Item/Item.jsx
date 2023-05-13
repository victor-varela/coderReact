import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Text,
  Divider,
  Button,
  ButtonGroup,
  Image,
} from "@chakra-ui/react";
const Item = ({producto: { id, image, title, price }}) => {
  return (
    <Card maxW="sm" m="auto" mb={100} align="center" key={id}>
      <CardBody>
        <Image src={image} alt="" borderRadius="lg" />

        <Stack mt="6" spacing="3">
          <Heading size="md">{title}</Heading>

          <Text color="blue.600" fontSize="2xl">
            ${price}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            Comprar
          </Button>
          {/* //añadir Link de react router DOM */}
          <Link to={`/detail/${id}`}>
            <Button variant="ghost" colorScheme="blue">
              Ver Detalles
            </Button>
          </Link>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default Item;
