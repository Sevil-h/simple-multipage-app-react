import { Fragment } from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HightlightedQuote from "../components/quotes/HighlightedQuote";
import NoQuotesFound from "../components/quotes/NoQuotesFound";

const DUMMY_DATA = [
	{
		id: "q1",
		author: "Max",
		text: "Learning React is fun!",
	},
	{
		id: "q2",
		author: "Maxmilian",
		text: "Learning React is great!",
	},
];

const QuotesDetail = () => {
	const match = useRouteMatch();
	console.log(match);
	const params = useParams();
	const quote = DUMMY_DATA.find((quote) => quote.id === params.quotesId);

	if (!quote) {
		return <NoQuotesFound />;
	}
	return (
		<Fragment>
			<h1>Quotes Detail Page</h1>
			<HightlightedQuote text={quote.text} author={quote.author} />
			<Route path={`${match.path}`} exact>
				<div className="centered">
					<Link className="btn--flat" to={`${match.url}/comments`}>
						Load Comments
					</Link>
				</div>
			</Route>
			<Route path={`${match.path}/comments`}>
				<Comments />
			</Route>
		</Fragment>
	);
};

export default QuotesDetail;
