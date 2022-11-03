import logo from './logo.svg';
import './App.css';

import { useForm } from "react-hook-form";


export default function App() 
{
    const { register, handleSubmit, reset } = useForm({ shouldUseNativeValidation: true });
    const onSubmit = async (data: any) => 
    { 
	console.log(data); 
	var mess = process.env.REACT_APP_SERVER
	    + '?ftp_login=' + data.ftp_login + '&ftp_password=' + data.ftp_password;
	
	// данные в дальнейшем будут зашифрованы с применением токенов
	
	fetch(mess)
      	    .then(function(response) 
	    {
        	return response.json();
      	    })
      	    .then(function(data) 
	    {
        	alert('Request successful' + data);
        	return data;
      	    })
            .catch(function(error) 
	    {
		console.log(error); 		
      	    })
	;
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
	    <p> ftp_login </p>
            <input
                {...register("ftp_login", { required: "Please enter ftp_login." })}
            />
	    <p> ftp_password </p>
            <input
                {...register("ftp_password", { required: "Please enter ftp_password." })}
            />
            <input type="submit" />
        </form>
    );
}
