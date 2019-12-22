import React, {useState} from 'react';
import PropTypes from 'prop-types';

function useInputValue(defaultValue = ''){
	const [value, setValue] = useState('');

	return {
		bind : {
			value,
			onChange : event =>  setValue(event.target.value)
		},
		clear : () => setValue(''),
		value : () => value
	}
}

function AddToDo({onCreateToDo}){
	const input = useInputValue('');

	function submitHandler(event){
		event.preventDefault();

		if(input.value().trim()){
			onCreateToDo(input.value());
			input.clear();
		}
	}

	return (
		<form style={{marginBottom : '1rem'}} onSubmit={submitHandler}>
			<input {...input.bind}/>
			<button>Add todo</button>
		</form>
	)
}

AddToDo.propTypes = {
	onCreateToDo : PropTypes.func.isRequired
}

export default AddToDo