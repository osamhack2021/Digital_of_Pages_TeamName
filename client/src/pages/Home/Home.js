import React, { useState, useEffect } from 'react';
import { Box } from '@material-ui/core';

const Home = (props) => {
	const [message, setMessage] = useState();

	useEffect(() => {
		fetch('/api')
			.then((res) => res.json())
			.then((data) => setMessage(data.message));
	});

	return <Box>Home Main {message}</Box>;
};

export default Home;