import React from 'react';
import ReactDOM from 'react-dom/client';


export default function create_form(form: any)
{
	//   повторное создание ReactDOMClient.createRoot()  
	//   более правильное решение - обновление с другой формой
	const root = ReactDOM.createRoot
	(
		document.getElementById('root') as HTMLElement
	);
	
	root.render
	(	
		<React.StrictMode>	
			{form}
		</React.StrictMode>
	);
}