import { createRootRoute, Outlet } from '@tanstack/react-router'
import PageNotFound from "../components/PageNotFound.tsx";

const RootLayout = () => (
    <>
        <Outlet />
    </>
)

export const Route = createRootRoute({
    component: RootLayout,
    notFoundComponent: () => <PageNotFound />
})