//AFTER se puede hacer un fetch son settimeout??? tengo 2 horas libres por dia, como puedo aprender? que me recomiendan?
import { CircularProgress } from "@chakra-ui/react";
import { mFetch } from "../../assets/services/mFetch";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
export const ItemlistContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const { cid } = useParams();
  //hacer llamada a la api desde otro componente -LISTO
  //hacer itemlist/counter
  //aca esta la verdad de la milanesa, aca guardo el valor de products y lo hago persistente porque es un estado declarado en el componente

          // setProducts(products.filter((producto) => producto.category === cid));
         //aca esta la verdad de la milanesa, aca guardo el valor de products y lo hago persistente porque es un estado declarado en el componente
         
        //aca esta la verdad de la milanesa, aca guardo el valor de products y lo hago persistente porque es un estado declarado en el componente
        // setProducts(products.filter((producto) => producto.category === cid));
         //aca esta la verdad de la milanesa, aca guardo el valor de products y lo hago persistente porque es un estado declarado en el componente
        //¿me los esta guardando, como?
        //Aca debe estar la llamada a la API porque es un componente contenedor, y estos tipos de componenetes son los que manejan la logica y los estados y las llamadas a los servicios externos (API). Estas llamadas pueden causar efectos secundarios y por ello se manejan con useEffect
        useEffect(() => {
          const dbFirestore = getFirestore();
          const queryCollection = collection(dbFirestore, "productos");
         if (!cid) {
            getDocs(queryCollection)
              .then(resp=>setProducts(resp.docs.map(producto=>({id:producto.id, ...producto.data()}))))
              .catch(err=>console.log(err))
              .finally(setIsLoading(false))
        
                }else{
                  const queryCollectionFiltered= query(queryCollection, where("category","==", cid))
                  getDocs(queryCollectionFiltered)
                  .then(resp=>setProducts(resp.docs.map(producto=>({id:producto.id, ...producto.data()}))))
                  .catch(err=> console.log(err))
                  .finally(setIsLoading(false))

                }
              }, [cid]);

  console.log(products); 
  return (
    <>
      <h1>{greeting}</h1>
      {isloading ? (
        <CircularProgress
          isIndeterminate
          color="blue.300"
          value={30}
          size="120px"
        />
      ) : (
        <ItemList productos={products} />
      )}
    </>
  );
};
