"use client"
import styles from './page.module.scss';
import firestore from "firebaseConfig/firestore"
import { collection, addDoc } from "firebase/firestore"
import { useState } from "react"


const UploadButton = () => {
    const [value, setValue] = useState("test");
  
    const handleClick = async () => {
      await addDoc(collection(firestore, "teams"), { value });
    };
  
    return (
        <div>
        <form onSubmit={(event) => event.preventDefault()}>
          <input onChange={(event) => setValue(event.target.value)} />
          <button onClick={handleClick}>전송</button>
        </form>
      </div>
    );
};

export default UploadButton;