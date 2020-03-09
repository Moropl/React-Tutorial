import React, {useState} from "react";

export const CredentialsForm = (props) => {
    const [email, sssetEmail] = useState();

    const $onInputChange = (e) =>{
        sssetEmail(e.target.value);
    }

    return (
        <div>
            <input onChange={$onInputChange} value={email} />
        </div>   
    );
}