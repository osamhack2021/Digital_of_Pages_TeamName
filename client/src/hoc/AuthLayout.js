import React from 'react';
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
}));

const AuthLayout = (props) => {
	const classes = useStyles();

	console.log(props);
	return (
		<Grid container className={classes.root}>
			<CssBaseline />
			<Grid item xs={false} md={7} className={classes.image} />
			<Grid item xs={12} md={5} component={Paper} elevation={6} square>
				<div className={classes.paper}>
					<Avatar className={classes.avatar}>
						<LockOutlinedIcon />
					</Avatar>
					{props.children}
				</div>
			</Grid>
		</Grid>
	);
};

export default AuthLayout;