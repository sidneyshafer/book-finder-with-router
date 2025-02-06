import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import BookSearchPage from "./pages/BookSearch";
import ErrorPage from "./pages/Error";
import BookDetailPage from "./pages/BookDetail";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/book-search', element: <BookSearchPage /> },
      { path: '/book-search/:bookId', element: <BookDetailPage /> },
    ]
  }
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
