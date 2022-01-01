import HomePage from "./HomePage/HomePage";

export const ROUTES = [
    {
        path: "/",
        exact: true,
        element: HomePage,
        htmlTitle: "Home",
    },
]

export const DEFAULT_ROUTE = ROUTES[0];