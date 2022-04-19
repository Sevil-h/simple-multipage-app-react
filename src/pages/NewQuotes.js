import { useHistory } from "react-router-dom";
import QuotesForm from "../components/quotes/QuoteForm";

const NewQuotes = () => {
	const history = useHistory();
	const addQuoteHandler = (quoteData) => {
		console.log(quoteData);
		history.push("/quotes");
	};
	return <QuotesForm onAddQuote={addQuoteHandler} />;
};

export default NewQuotes;
