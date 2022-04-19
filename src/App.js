import { Route, Switch, Redirect } from "react-router-dom";
import AllQuotes from "./pages/AllQuotes";
import NewQuotes from "./pages/NewQuotes";
import QuotesDetail from "./pages/QuotesDetail";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/NotFound";

function App() {
	return (
		<div>
			<main>
				<Layout>
					<Switch>
						<Route path="/" exact>
							<Redirect to="/quotes" />
						</Route>
						<Route path="/quotes" exact>
							<AllQuotes />
						</Route>
						<Route path="/quotes/:quotesId">
							<QuotesDetail />
						</Route>
						<Route path="/new-quote">
							<NewQuotes />
						</Route>
						<Route path="*">
							<NotFound />
						</Route>
					</Switch>
				</Layout>
			</main>
		</div>
	);
}

export default App;
