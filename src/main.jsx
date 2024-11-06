import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Contato from './pages/Contato.jsx'
import GenreList from './pages/GenreListPage.jsx'
import Home from './pages/Home.jsx'
import MovieDetailPage from './pages/MovieDetailPage.jsx'
import MovieListPage from './pages/MovieListPage.jsx'
import MoviesByGenrePage from './pages/MoviesByGenrePage.jsx'
import PageNotFound from './pages/PageNotFound.jsx'
import Favoritos from './pages/Favoritos.jsx'
import FilmesSalvos from './pages/FilmesSalvos.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: '/movies', element: <MovieListPage /> },
      { path: '/movies/:id', element: <MovieDetailPage /> },
      { path: '/genre', element: <GenreList /> },
      { path: '/genre/:generoescolhido', element: <MoviesByGenrePage /> },
      { path: '/contato', element: <Contato /> },
      { path: '/favoritos', element: <Favoritos /> },
      { path: '/saved', element: <FilmesSalvos /> },
      { path: '*', element: <PageNotFound /> }
    ]

  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
