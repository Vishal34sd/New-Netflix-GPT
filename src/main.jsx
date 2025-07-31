import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Login from './pages/Login.jsx'
import Browse from './pages/Browse.jsx'

const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <Login/>
    },
     {
        path : "/browse",
        element : <Browse/>
    }
])

createRoot(document.getElementById('root')).render(
  
   <RouterProvider router = {appRouter}/>
)
