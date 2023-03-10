import React from "react";
import { GlobalStyle } from "./GlobalStyle";
import { PageLayout } from "./components/index";

const App = () => {
	return (
		<React.Fragment>
			<GlobalStyle />
			<PageLayout />
		</React.Fragment>
	);
};

export default App;
