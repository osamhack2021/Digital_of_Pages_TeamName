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
		display: 'flex',
	},
	paper: {
		padding: theme.spacing(1),
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},
	menuButton: {
		marginRight: 36,
	},
	hide: {
		display: 'none',
	},
	drawerClose: {
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		overflowX: 'hidden',
		width: 0 /*theme.spacing(7) + 1*/,
		[theme.breakpoints.up('sm')]: {
			width: theme.spacing(9) + 1,
		},
	},
	toolbar: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
	},
}));

const Signup = (props) => {
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
		<div>
			<form onSubmit={formik.handleSubmit}>
				<TextField
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
				{message && <Alert severity="error">{message}</Alert>}
				<Button color="primary" variant="contained" fullWidth type="submit">
					Submit
				</Button>
			</form>
		</div>
	);
};

export default Signup;