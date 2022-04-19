import { Link } from "react-router-dom";
import QuoteList from "../components/quotes/QuoteList";
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
const AllQuotes = () => {
	return <QuoteList quotes={DUMMY_DATA} />;
};

export default AllQuotes;
