import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Container } from '@material-ui/core';

const Layout = (props) => {
	return (
		<>
			<Header />
				<Container>{props.children}</Container>
			<Footer />
		</>
	);
};

export default Layout;