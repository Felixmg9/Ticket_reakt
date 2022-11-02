import logo from './logo.svg';
import './App.css';

import { useForm } from "react-hook-form";

export default function App() {
    const { register, handleSubmit } = useForm({ shouldUseNativeValidation: true });
    const onSubmit = async (data: any) => 
	{ console.log(data); 

	  fetch('http://test-lvl/?subject=df%20%20g&user_name=USER&user_email=MAIL@gmail.com')
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
      		});

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

