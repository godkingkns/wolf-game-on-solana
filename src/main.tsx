import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { Home } from './pages/home/main.tsx';
import { WhitePaper } from './pages/white-paper/main.tsx';
import { WalletContextProvider } from './contexts/ContextProvider.tsx';
import { AuthProvider } from './contexts/AuthContextProvider.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/white-paper",
        element: <WhitePaper />
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <WalletContextProvider>
        <RouterProvider router={router} />
      </WalletContextProvider>
    </AuthProvider>
  </React.StrictMode>,
)
