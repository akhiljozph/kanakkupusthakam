import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';

import { routes } from './routes';
import { kanakkStore } from './store/kanakk.store';
import type { IRoutesConfig } from './routes.types';

import './App.css';

function renderRoutes(routesConfig: IRoutesConfig[]) {
  return routesConfig?.map((route) => {
    const Element = route.element;

    return (
      <Route
        key={route.path}
        path={route.path}
        element={<Element />}
      >
        {route.children && renderRoutes(route.children)}
      </Route>
    );
  });
}

function App() {

  return (
    <Provider store={kanakkStore}>
      <BrowserRouter>
        <Routes>
          {renderRoutes(routes)}
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
