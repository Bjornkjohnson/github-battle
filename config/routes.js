var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../components/Main');
var Home require('../compnents/Home');

var routes = (
    <Router>
        <Route path='/' component={Main}>
            <Route path='/home' compnent={Home} />
        </Route>
    </Router>
);

module.exports = routes;
