import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./components/Layout/Layout"
import Home from "./pages/Home/Home"
import Movies from "./pages/Movies/Movies"
import Shows from "./pages/Shows/Shows"
import Support from "./pages/Support/Support"
import MovieDetails from "./pages/MovieDetails/MovieDetails"
import ShowDetails from "./pages/ShowDetails/ShowDetails"
import GenreMovies from "./pages/GenreMovies/GenreMovies"
import GenreShows from "./pages/GenreShows/GenreShows"

function App() {
  const routes = createBrowserRouter([{
    path: '/',
    element: <Layout />,
    children: [{ index: true, element: <Home /> },
    { path: '/Movies', element: <Movies /> },
    { path: '/Shows', element: <Shows /> },
    { path: '/Support', element: <Support /> },
    { path: '/MovieDetails/:id', element: <MovieDetails /> },
    { path: '/ShowDetails/:id', element: <ShowDetails /> },
    { path: '/GenreMovies/:id', element: <GenreMovies /> },
    { path: '/GenreShows/:id', element: <GenreShows /> },
    ]

  }])
  return (
    <>
      <RouterProvider
       router={routes}>
        
       </RouterProvider>
    </>
  )
}

export default App
