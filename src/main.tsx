import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { routeTree } from './routeTree.gen'
import './index.css'
import {createRouter, RouterProvider} from "@tanstack/react-router";


declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router
    }
}
const router = createRouter({ routeTree })

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);