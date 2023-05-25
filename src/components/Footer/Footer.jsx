import { Box, Grid, Text } from "@chakra-ui/react";
import { FaShippingFast, FaCreditCard, FaPhone } from 'react-icons/fa';

function Footer() {
  return (
    <Box bg="#1f0f53" py={8} mt={4}>
      <Grid templateColumns={{ base: "1fr", sm: "repeat(3, 1fr)" }} gap={6} maxW="800px" mx="auto"
          alignItems="center"
      >
        <Box
         textAlign="center" color="#ffdb99" display="flex" flexDirection="column" alignItems="center"
         >
          <FaShippingFast size={32} color="white" />
          <Text mt={2} fontWeight="bold">Envíos</Text>
        </Box>
        <Box textAlign="center" color="#ffdb99"
              display="flex" flexDirection="column" alignItems="center"
        >
          <FaCreditCard size={32} color="white" />
          <Text mt={2} fontWeight="bold">Formas de Pago</Text>
        </Box>
        <Box textAlign="center" color="#ffdb99"
              display="flex" flexDirection="column" alignItems="center"
        >
          <FaPhone size={32} color="white" />
          <Text mt={2} fontWeight="bold">Contacto</Text>
        </Box>
      </Grid>
    </Box>
  );
}

export default Footer;

