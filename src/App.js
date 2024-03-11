import './App.css';
import {ErrorBoundary} from "./component/ErrorBoundary"
import Login from './component/Login';
import Browse from './component/Browse';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Body from './component/Body';
import { Provider } from 'react-redux';
import AppStore from './utils/AppStore';

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
        path: "/browse",
        element:<Browse/>
    }

  ])

  return (
    <div className="App">
      <ErrorBoundary>
        <Provider store={AppStore} >
         <RouterProvider router={appRouter} />
        </Provider>
      </ErrorBoundary>
    </div>
  );
}


export default App;
