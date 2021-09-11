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

import AuthService from '../services/auth.service';

const validationSchema = yup.object({
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

const Signin = (props) => {
	const classes = useStyles();
	const [isLoading, setIsLoading] = useState(false);
	const [message, setMessage] = useState('');

	const formik = useFormik({
		initialValues: {
			username: '',
			password: '',
		},
		validationSchema: validationSchema,
		onSubmit: ({ username, password }) => {
			AuthService.signin(username, password).then(
				() => {
					props.history.push('/user');
					window.location.reload();
				},
				(error) => {
					const resMessage =
						(error.response && error.response.data && error.response.data.message) ||
						error.message ||
						error.toString();

					setIsLoading(false);
					setMessage(resMessage);
				}
			);
		},
	});

	return (
		<Grid container className={classes.root}>
			<CssBaseline />
			<Grid item xs={false} md={7} className={classes.image} />
			<Grid item xs={12} md={5} component={Paper} elevation={6} square>
				<div className={classes.paper}>
					<Avatar className={classes.avatar}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Sign in
					</Typography>
					<form className={classes.form} onSubmit={formik.handleSubmit}>
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
						<Button
							type="submit"
							fullWidth
							variant="contained"
							color="primary"
							className={classes.submit}
						>
							Sign In
						</Button>
					</form>
					<Button fullWidth color="primary" className={classes.submit}>
						Sign Up
					</Button>
				</div>
			</Grid>
		</Grid>

		// <div>
		// 	<form onSubmit={formik.handleSubmit}>
		// 		<TextField
		// 			fullWidth
		// 			id="username"
		// 			name="username"
		// 			label="Username"
		// 			value={formik.values.username}
		// 			onChange={formik.handleChange}
		// 			error={formik.touched.username && Boolean(formik.errors.username)}
		// 			helperText={formik.touched.username && formik.errors.username}
		// 		/>
		// 		<TextField
		// 			fullWidth
		// 			id="password"
		// 			name="password"
		// 			label="Password"
		// 			type="password"
		// 			value={formik.values.password}
		// 			onChange={formik.handleChange}
		// 			error={formik.touched.password && Boolean(formik.errors.password)}
		// 			helperText={formik.touched.password && formik.errors.password}
		// 		/>
		// 		<Button color="primary" variant="contained" fullWidth type="submit">
		// 			Submit
		// 		</Button>
		// 	</form>
		// </div>
	);
};

export default Signin;