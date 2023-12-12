import './App.css'
import { router } from './router/router.tsx'
import { RouterProvider } from 'react-router-dom'

export const App = () => <RouterProvider router={router} />
