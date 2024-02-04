import { Suspense } from 'react';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Loader } from '../components/Loader';
import { store } from '../redux/store';
import { routes } from '../routes';

export const App = () => {
  const router = createBrowserRouter(routes);

  return (
    <Provider store={store}>
      <Suspense fallback={<Loader />}>
        <RouterProvider router={router} />
      </Suspense>
    </Provider>
  );
};

export default App;
