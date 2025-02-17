import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const App = () => {
	const [input, setInput] = useState('');

	const onChangeHandler = (e: any) => {
		const { name, value } = e.target;

		//setInput(prevState => ({
		//	...prevState,
		//	[name]: value
		//}));
	};

	return (
		<section style={{ padding: '20px' }}>
			<h1 className='mb-4'>Sign Up</h1>

			<Form>
				<Form.Control
					className='mt-4'
					type='text'
					name='name'
					placeholder='Name'
					onChange={onChangeHandler}
				/>
				<br />

				<Form.Control
					className='mt-4'
					type='text'
					name='email'
					placeholder='E-mail'
					onChange={onChangeHandler}
				/>
				<br />

				<Form.Control
					className='mt-4'
					type='password'
					name='password'
					placeholder='Password'
					onChange={onChangeHandler}
				/>				
				<br />

				<Button
					className='mt-4'
				>
					OK
				</Button>
			</Form>
		</section>
	)
};

export default App;