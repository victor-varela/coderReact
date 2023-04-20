import { useParams } from "react-router-dom"
import { ItemDetail } from "../itemDetail/itemDetail"

export const ItemDetailContainer = () => {
    //Estado para guardar el producto. Se hace con useParams para capturar el parametro que viene en la ruta
    const {pid}= useParams()
    //useEffect traer el producto, guardar en el estado
    return (
        <div>
            <ItemDetail
            //prducto={product}
            />
        </div>
    )
}
