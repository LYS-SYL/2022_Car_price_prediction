import React, { useEffect } from "react";

export default function WithHtmlTitleRoute({ htmlTitle, element: Component, ...props }) {
	useEffect(() => {
		window.document.title = htmlTitle || "Calendar";
	}, []);
	return <Component {...props} />;
}

