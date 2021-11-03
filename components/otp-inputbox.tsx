import type {FC} from  "react";
import {useEffect} from "react";
import {
    Box,
    Stack
} from "@mui/material";


interface Props{
    otp:(number|string)[];
    setOtp:(args:(number|string)[])=>void;
    onChangeHandler:(e:any,index:number)=>void;
    inputFocus:(element:any)=>void;
    onPasteHandler:(e:any)=>void;
}
const OtpInputBox:FC<Props> = ({
    otp,
    setOtp,
    onChangeHandler,
    inputFocus,
    onPasteHandler
})=>{

    return(
        <>
        <Box
        >
            <Stack direction="row" spacing = {2}>
                {
                otp.map((value,index)=>{
                    return(
                        <input
                        name = {`otp${index}`}
                        key = {index}
                        style = {{
                            borderWidth:"0px 0px 2px 0px",
                            width:"50px",
                            textAlign:"center",
                            fontSize:"20px",
                            fontWeight:900

                        }}
                        type ="text"
                        value = {otp[index]}
                        autoComplete="off"
                        maxLength={1}
                        tabIndex = {index+1}
                        onKeyUp = {(e)=>inputFocus(e)}
                        onChange = {(e)=>onChangeHandler(e,index)}
                        onPaste = {(e)=>onPasteHandler(e)}
                        /> 
                    )
                })
                }
            </Stack>
        </Box>
        </>
    )
}


export default OtpInputBox;
