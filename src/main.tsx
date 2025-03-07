import { Tooltip } from 'radix-ui';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import About from './About/index.tsx';
import Base from './Base.tsx';
import Home from './Home/index.tsx';
import { RoutePaths } from './constants/routes.ts';
import './index.css';
import './theme.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Tooltip.Provider>
      <BrowserRouter>
        <Routes>
          <Route element={<Base />}>
            <Route path={RoutePaths.HOME} element={<Home />} />
            <Route path={RoutePaths.ABOUT} element={<About />} />
            <Route path={RoutePaths.EPISODES} element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Tooltip.Provider>
  </StrictMode>
);
