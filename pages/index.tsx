import type { NextPage } from 'next';
import {useState} from "react";
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import VerificationButton from "../components/verification-button";
import VerificationModal from "../components/verification-modal"
import AlertBox from "../components/Alert-box";


const Home: NextPage = () => {
    const [modalState,setModalState] = useState<boolean>(false);
    const [alertState,setAlertState] = useState<boolean>(false);
    return (
        <>
        {
            (alertState)?
            <AlertBox/>:
            <div/>
        }
        <VerificationButton 
        modalState={modalState} 
        setModalState = {setModalState}/>

        <VerificationModal
        modalState={modalState}
        setModalState={setModalState}
        setAlertState={setAlertState}
        />

        </>

    )
}

export default Home
