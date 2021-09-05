import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import Auth from './pages/Auth/Auth';
import Bulletin from './pages/Bulletin/Bulletin';
import Detail from './pages/Detail/Detail';
import Home from './pages/Home/Home';
import User from './pages/User/User';
import NotFound from './pages/404/404';

const App = (props) => {
	const routes = (
		<Switch>
			<Route path="/" exact component={Home} />
			<Route path="/auth" component={Auth} />
			<Route path="/bulletin" component={Bulletin} />
			<Route path="/detail" component={Detail} />
			<Route path="/user" component={User} />
			<Route path="/404" component={NotFound} />
			<Redirect to='/404' />
		</Switch>
	);

	return (
		<Layout>
			<Router>
				<Suspense fallback={<div>Loading...</div>}>{routes}</Suspense>
			</Router>
		</Layout>
	);
};
export default App;