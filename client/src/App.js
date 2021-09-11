import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
// import Layout from './hoc/Layout/Layout';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Bulletin from './pages/Bulletin';
import Detail from './pages/Detail';
import Home from './pages/Home';
import User from './pages/User';
import NotFound from './pages/404';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const App = (props) => {
	const routes = (
		<Switch>
			<Route path="/Signin" component={Signin} />
			<Route path="/Signup" component={Signup} />
			<>
				<Header />
				<Route path="/" exact component={Home} />
				<Route path="/bulletin" component={Bulletin} />
				<Route path="/detail" component={Detail} />
				<Route path="/user" component={User} />
				<Route path="/404" component={NotFound} />
				<Footer />
			</>
		</Switch>
	);

	return (
		<Router>
			<Suspense fallback={<div>Loading...</div>}>{routes}</Suspense>
		</Router>
	);
};
export default App;