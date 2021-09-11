import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {
	Box,
	FormControl,
	InputLabel,
	Input,
	FormHelperText,
	Container,
	makeStyles,
	CssBaseline,
	Avatar,
	Typography,
	Grid,
	TextField,
	Button,
	Link,
	Paper,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Alert from '@material-ui/lab/Alert';

import AuthService from '../services/auth.service';

const validationSchema = yup.object({
	email: yup
		.string('Enter your email')
		.email('Enter a valid email')
		.required('Email is required'),
	username: yup
		.string('Enter your username')
		.min(2, 'Too Short!')
		.max(30, 'Too Long!')
		.required('Username is required'),
	password: yup
		.string('Enter your password')
		.min(8, 'Password should be of minimum 8 characters length')
		.required('Password is required'),
});

const useStyles = makeStyles((theme) => ({
	root: {
		height: '100vh',
	},
	image: {
		backgroundImage: 'url(https://source.unsplash.com/random)',
		backgroundSize: 'cover',
	},
	paper: {
		margin: theme.spacing(8, 4),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%',
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

const Signup = (props) => {
	const classes = useStyles();
	const [message, setMessage] = useState('');
	const [isSuccess, setIsSuccess] = useState(false);
	const formik = useFormik({
		initialValues: {
			email: '',
			username: '',
			password: '',
		},
		validationSchema: validationSchema,
		onSubmit: ({ email, password, username }) => {
			console.log(email, password, username);
			AuthService.signup(username, email, password).then(
				(res) => {
					setMessage(res.data.message);
					setIsSuccess(true);
				},
				(error) => {
					const resMessage =
						(error.response && error.response.data && error.response.data.message) ||
						error.message ||
						error.toString();

					setMessage(resMessage);
					setIsSuccess(false);
				}
			);
		},
	});

	return (
		<>
			<Typography component="h1" variant="h5">
				Sign Up
			</Typography>
			<form className={classes.form} onSubmit={formik.handleSubmit}>
				<TextField
					variant="outlined"
					margin="normal"
					fullWidth
					id="email"
					name="email"
					label="Email"
					value={formik.values.email}
					onChange={formik.handleChange}
					error={formik.touched.email && Boolean(formik.errors.email)}
					helperText={formik.touched.email && formik.errors.email}
				/>
				<TextField
					variant="outlined"
					margin="normal"
					fullWidth
					id="username"
					name="username"
					label="Username"
					value={formik.values.username}
					onChange={formik.handleChange}
					error={formik.touched.username && Boolean(formik.errors.username)}
					helperText={formik.touched.username && formik.errors.username}
				/>
				<TextField
					variant="outlined"
					margin="normal"
					fullWidth
					id="password"
					name="password"
					label="Password"
					type="password"
					value={formik.values.password}
					onChange={formik.handleChange}
					error={formik.touched.password && Boolean(formik.errors.password)}
					helperText={formik.touched.password && formik.errors.password}
				/>
				<TextField
					variant="outlined"
					margin="normal"
					fullWidth
					id="checkPassword"
					name="checkPassword"
					label="Type your password again"
					type="password"
					value={formik.values.password}
					onChange={formik.handleChange}
					error={formik.touched.password && Boolean(formik.errors.password)}
					helperText={formik.touched.password && formik.errors.password}
				/>
				<Button
					type="submit"
					fullWidth
					variant="contained"
					color="primary"
					className={classes.submit}
				>
					Sign Up
				</Button>
			</form>
			<Button fullWidth color="primary" className={classes.submit}>
				Sign In
			</Button>
		</>
	);
};

export default Signup;