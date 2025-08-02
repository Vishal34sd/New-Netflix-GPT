import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Login from './pages/Login.jsx'
import Browse from './pages/Browse.jsx'
import { Provider } from 'react-redux'
import appStore from './utils/appStore.js'
import SearchPage from './pages/SearchPage.jsx'

const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <Login/>
    },
     {
        path : "/browse",
        element : <Browse/>
    },
    {
        path : "/searchPage",
        element : <SearchPage/>
    }
])

createRoot(document.getElementById('root')).render(
  <Provider store={appStore}>
   <RouterProvider router = {appRouter}/>
   </Provider>
)
