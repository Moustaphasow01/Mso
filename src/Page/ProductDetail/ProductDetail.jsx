import { useParams } from "react-router";
import "./ProductDetail.css";

export default function ProductDetail(){
    let {id} = useParams();
    console.log(id);
    return(
        <div>
            
        </div>
    )
}