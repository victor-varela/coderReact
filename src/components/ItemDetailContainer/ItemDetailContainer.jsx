import { useParams } from "react-router-dom";
import { ItemDetail } from "../itemDetail/itemDetail";
import { useEffect, useState } from "react";
import { mFetch } from "../../assets/services/mFetch";
import { CircularProgress } from "@chakra-ui/react";
import { doc, getDoc, getFirestore } from "firebase/firestore";

export const ItemDetailContainer = () => {
  //Estado para guardar el producto. Se hace con useParams para capturar el parametro que viene en la ruta el id del producto.
  const [item, setItem] = useState({});
  const [isloading, setIsLoading] = useState(true);
  const { pid } = useParams();

  //useEffect traer el producto, guardar en el estado
  useEffect(() => {
    const dbFirestore = getFirestore();
    const queryDoc = doc(dbFirestore, "products", pid);
    getDoc(queryDoc)
      .then((resp) => setItem({id:resp.id, ...resp.data()}))
      .catch((err) => console.log(err))
      .finally(setIsLoading(false));
     }, []);
  console.log(item);

  //hacer is loading. siempre
  return (
    <div>
      {isloading ? (
        <CircularProgress
          isIndeterminate
          color="blue.300"
          value={30}
          size="120px"
        />
      ) : (
        <ItemDetail item={item} />
      )}
    </div>
  );
};
