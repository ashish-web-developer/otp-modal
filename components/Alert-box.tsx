import {FC} from "react";
import {
    Alert,
    AlertTitle
} from "@mui/material";




const AlertBox:FC = ()=>{
    return(
        <Alert severity="success">
              <AlertTitle>Success</AlertTitle>
              You are -<strong>Verified successfuly</strong>
        </Alert>
    )
}


export default AlertBox;
