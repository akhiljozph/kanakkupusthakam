import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { routes } from './routes';
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
    <BrowserRouter>
      <Routes>
        {renderRoutes(routes)}
      </Routes>
    </BrowserRouter>
  )
}

export default App
