import type {FC} from "react";
import {useState} from "react";
import OtpInputBox from "./otp-inputbox";
import { 
    grey,
    green
} from '@mui/material/colors';

import {
    Modal,
    Backdrop,
    Fade,
    Box,
    Stack,
    Divider,
    Typography,
    TextField,
    Button
} from "@mui/material";






interface Props {
    modalState:boolean;
    setModalState:(args:boolean)=>void;
    setAlertState:(args:boolean)=>void;
}

const ModalStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width:{xs:"95%",md:500},
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius:"10px"
}
const VerificationModal:FC<Props> = ({modalState,setModalState,setAlertState})=>{
    const [otp,setOtp] = useState<(number|string)[]>(new Array(6).fill(""))


    // focus handler

    const inputFocus = (e:any)=>{
        if (e.key === "Delete" || e.key === "Backspace") {
			const next = e.target.tabIndex - 2;
			if (next > -1) {
                e.target.form.elements[next].focus()
			}
        }else if(e.key === "ArrowRight"){
            const next = e.target.tabIndex;
            console.log(next);
            if (next < 6) {
              e.target.form.elements[next].focus()
            }
        }else if(e.key === "ArrowLeft"){
            const next = e.target.tabIndex-2;
            if(next > -1){
                e.target.form.elements[next].focus();
            }
        }else if(isNaN(e.target.value)){
            e.target.value = "";
        }
        else if(isFinite(e.key)){
            const next = e.target.tabIndex;
            console.log(e.target.value);
            if (next < 6) {
              e.target.form.elements[next].focus()
            }
        }
    }



    // onChange event handler 
    const onChangeHandler = (e:any,index:number)=>{
        let newArr:(number|string)[] = [...otp];
        newArr[index] = e.target.value;
        setOtp(newArr);
    }


    // onSubmit handler
    const onSubmitHandler = (e:any)=>{
        e.preventDefault();
        console.log(otp,"this is otp");
        setModalState(false);
        setAlertState(true);
    }

    // on paste handler
    const onPasteHandler = (e:any)=>{
        e.preventDefault();
        const pastedData = e.clipboardData.getData("text/plain");
        let pastedDataArray = pastedData.split("");
        let newArr = new Array(6).fill("");
        for (let i = 0;i< newArr.length;i++){
            newArr[i] = pastedDataArray[i];
        }
        setOtp(newArr);
        e.target.form.elements[5].focus()
    }

    return(
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open = {modalState}
        onClose = {()=>setModalState(false)}
        closeAfterTransition
        BackdropComponent = {Backdrop}
        BackdropProps={{
            timeout:100,
        }}
        >
			<Fade in = {modalState}>
                <Box
                sx = {ModalStyle}
                >
                    <Stack 
                    sx = {{
                        width:"100%",
                        height:"100%"
                    }}
                    divider = {<Divider orientation="horizontal" flexItem/>}
                    direction = "column"
                    spacing = {3}
                    >
                    
                    
                        {/* Modal title */}
                        <Typography 
                        sx = {{
                            textAlign:"center"
                        }}
                        variant = "h5">
                            Phone Verification
                        </Typography>
                        <Box
                        sx = {{
                            display:"flex",
                            flexDirection:"column",
                            alignItems:"center"
                        }}
                        >
                        <form onSubmit = {(e)=>onSubmitHandler(e)}>
                            <Stack
                            direction = "column"
                            spacing = {3}
                            >
                                <Typography
                                sx = {{
                                    color:grey[700],
                                    textAlign:"center"
                                }}
                                >
                                    Enter the OTP you recieved on 8851134290
                                </Typography>
                                {/* input field for otp */}
                                <OtpInputBox 
                                inputFocus = {inputFocus}
                                onChangeHandler = {onChangeHandler}
                                onPasteHandler = {onPasteHandler}
                                otp = {otp} 
                                setOtp = {setOtp}/> 
                                <Box
                                sx = {{
                                    display:"flex",
                                    flexDirection:"row",
                                    justifyContent:"space-between",
                                    alignItems:"center"
                                }}
                                >
                                    {/* change the number button */}
                                    <Button
                                    sx = {{
                                        textTransform:"capitalize"
                                    }}
                                    >
                                        Change the number
                                    </Button>

                                    {/* re-send otp button */}
                                    <Button
                                    sx = {{
                                        textTransform:"capitalize"
                                    }}
                                    >
                                        Re-send OTP
                                    </Button>
                                </Box>


                                {/* verify phone number button */}
                                <Button 
                                type = "submit"
                                sx = {{
                                    borderRadius:"30px",
                                    backgroundColor:green[500],
                                        textTransform:"capitalize",
                                        "&:hover":{
                                            backgroundColor:green[700]
                                        }
                                }}
                                fullWidth 
                                variant = "contained"
                                size = "large" 
                                >
                                    Verify Phone Number
                                </Button>
                            </Stack>
                        </form>
                        </Box>

                    </Stack>
                </Box>
			</Fade>
        </Modal>
    )
}

export default VerificationModal;
