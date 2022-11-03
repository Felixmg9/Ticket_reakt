import logo from './logo.svg';
import './App.css';

import { useForm } from "react-hook-form";


export default function App_ticket() 
{
    const { register, handleSubmit } = useForm({ shouldUseNativeValidation: true });
    const onSubmit = async (data: any) => 
    { 
	console.log(data); 
	var mess = process.env.REACT_APP_SERVER || '';

	var fields = ['subject', 'user_name', 'user_email', 'author', 'content']
	fields.forEach(function(item, i, arr) 
	{
	    mess += (i == 0 ? '?' : '&');
	    mess += item + '=' + data[item];
	});

	// alert(mess);

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
	    <p> subject </p>
            <input
                {...register("subject", { required: "Please enter subject." })}
            />
	    <p> user_name </p>
            <input
                {...register("user_name", { required: "Please enter user_name." })}
            />
	    <p> user_email </p>
            <input
                {...register("user_email", { required: "Please enter user_email." })}
            />
	    <p> author </p>
	    <select {...register("author", { required: "Please enter author." })}>
	        <option value="client">client</option>
	        <option value="manager">manager</option>
	    </select>
	    <p> content </p>
            <input
                {...register("content", { required: "Please enter content." })}
            />
            <input type="submit" />
        </form>
    );
}

