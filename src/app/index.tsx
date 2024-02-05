import { Suspense } from 'react';
import { Provider } from 'react-redux';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Loader } from '../components/Loader';
import { persistor, store } from '../redux/store';
import { routes } from '../routes';

export const App = () => {
  const router = createHashRouter(routes);

  return (
    <Provider store={store}>
      <PersistGate loading={<Loader />} persistor={persistor}>
        <Suspense fallback={<Loader />}>
          <RouterProvider router={router} />
        </Suspense>
      </PersistGate>
    </Provider>
  );
};

export default App;
