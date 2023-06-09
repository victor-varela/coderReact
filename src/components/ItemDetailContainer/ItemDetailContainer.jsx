import { useParams } from "react-router-dom";
import { ItemDetail } from "../itemDetail/itemDetail";
import { useEffect, useState } from "react";
import { CircularProgress } from "@chakra-ui/react";
import { doc, getDoc, getFirestore } from "firebase/firestore";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const [isloading, setIsLoading] = useState(true);
  const { pid } = useParams();

  useEffect(() => {
    const dbFirestore = getFirestore();
    const queryDoc = doc(dbFirestore, "products", pid);
    getDoc(queryDoc)
      .then((resp) => setItem({id:resp.id, ...resp.data()}))
      .catch((err) => console.log(err))
      .finally(
        setTimeout(() => {
          setIsLoading(false);
          
        }, 2000))
     }, []);
  
  return (
    <div style={{minHeight:"200px"}}>
      {isloading ? (
        <CircularProgress
          isIndeterminate
          color="pink.300"
          value={30}
          size="120px"
        />
      ) : (
        <ItemDetail item={item} />
      )}
    </div>
  );
};
