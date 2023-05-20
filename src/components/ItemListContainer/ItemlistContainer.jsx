import { CircularProgress } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
export const ItemlistContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const { cid } = useParams();
  useEffect(() => {
    const dbFirestore = getFirestore();
    const queryCollection = collection(dbFirestore, "products");
    const queryCollectionFiltered = !cid
      ? queryCollection
      : query(queryCollection, where("category", "==", cid));
    getDocs(queryCollectionFiltered)
      .then((resp) =>
        setProducts(
          resp.docs.map((producto) => ({ id: producto.id, ...producto.data() }))
        )
      )
      .catch((err) => console.log(err))
      .finally(
        setTimeout(() => {
          setIsLoading(false);
        }, 2000)
      );
  }, [cid]);

  return (
    <>
      <h1>{greeting}</h1>
      <div style={{ minHeight: "200px" }}>
        {isloading ? (
          <CircularProgress
            isIndeterminate
            color="pink.300"
            value={30}
            size="150px"
          />
        ) : (
          <ItemList products={products} />
        )}
      </div>
    </>
  );
};
