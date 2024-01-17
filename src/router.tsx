import { createBrowserRouter } from 'react-router-dom'
import { Home } from './pages/Home'
import { App } from './App'
import { Issues } from './pages/PostIssues/Index'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'issues/:id',
        element: <Issues />,
      },
    ],
  },
])
