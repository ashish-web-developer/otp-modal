import {FC} from "react";
import {purple} from '@mui/material/colors';
import {
    Button,
    Box
} from "@mui/material";

import { 
    green
} from '@mui/material/colors';


interface Props{
    modalState:boolean;
    setModalState:(args:boolean)=>void;
}

const VerificationComponent:FC<Props> = ({modalState,setModalState})=>{
    return(
        <Box
        sx = {{
            width:"100vw",
            height:'100vh',
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
        }}
        >
        {/* verification button */}

        <Button 
        sx ={{
            backgroundColor:green[600],
            "&:hover":{
                backgroundColor:green[800]
            },
            textTransform:"capitalize"
        }}
        variant = "contained"
        size="large"
        onClick = {()=>setModalState(true)}
        >
        Verify
        </Button>

        </Box>
    )
}

export default VerificationComponent;
