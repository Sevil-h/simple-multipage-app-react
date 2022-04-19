import React, { Suspense } from "react";

import { Route, Switch, Redirect } from "react-router-dom";
import AllQuotes from "./pages/AllQuotes";
// import NewQuotes from "./pages/NewQuotes";
// import QuotesDetail from "./pages/QuotesDetail";
import Layout from "./components/layout/Layout";
// import NotFound from "./pages/NotFound";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const NewQuotes = React.lazy(() => import("./pages/NewQuotes"));
const QuotesDetail = React.lazy(() => import("./pages/QuotesDetail"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

function App() {
	return (
		<div>
			<main>
				<Layout>
					<Suspense
						fallback={
							<div className="centered">
								<LoadingSpinner />
							</div>
						}
					>
						<Switch>
							<Route path="/" exact>
								<Redirect to="/quotes" />
							</Route>
							<Route path="/quotes" exact>
								<AllQuotes />
							</Route>
							<Route path="/quotes/:quoteId">
								<QuotesDetail />
							</Route>
							<Route path="/new-quote">
								<NewQuotes />
							</Route>
							<Route path="*">
								<NotFound />
							</Route>
						</Switch>
					</Suspense>
				</Layout>
			</main>
		</div>
	);
}

export default App;
