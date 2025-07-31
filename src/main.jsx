import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Login from './pages/Login.jsx'
import Browse from './pages/Browse.jsx'
import { Provider } from 'react-redux'
import appStore from './utils/appStore.js'

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
  <Provider store={appStore}>
   <RouterProvider router = {appRouter}/>
   </Provider>
)
