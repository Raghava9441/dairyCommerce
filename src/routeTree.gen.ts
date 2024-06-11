// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as UnAuthenticatedImport } from './routes/_unAuthenticated'
import { Route as AuthenticatedImport } from './routes/_authenticated'
import { Route as ProductsImport } from './routes/Products'
import { Route as UnAuthenticatedRegisterImport } from './routes/_unAuthenticated/register'
import { Route as UnAuthenticatedLoginImport } from './routes/_unAuthenticated/login'
import { Route as AuthenticatedProfileImport } from './routes/_authenticated/profile'
import { Route as AuthenticatedOrdersImport } from './routes/_authenticated/orders'
import { Route as AuthenticatedCartImport } from './routes/_authenticated/cart'
import { Route as AuthenticatedCouponsImport } from './routes/_authenticated/Coupons'
import { Route as AuthenticatedCategoriesImport } from './routes/_authenticated/Categories'
import { Route as AuthenticatedAdressesImport } from './routes/_authenticated/Adresses'

// Create Virtual Routes

const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const UnAuthenticatedRoute = UnAuthenticatedImport.update({
  id: '/_unAuthenticated',
  getParentRoute: () => rootRoute,
} as any)

const AuthenticatedRoute = AuthenticatedImport.update({
  id: '/_authenticated',
  getParentRoute: () => rootRoute,
} as any)

const ProductsRoute = ProductsImport.update({
  path: '/Products',
  getParentRoute: () => rootRoute,
} as any)

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const UnAuthenticatedRegisterRoute = UnAuthenticatedRegisterImport.update({
  path: '/register',
  getParentRoute: () => UnAuthenticatedRoute,
} as any)

const UnAuthenticatedLoginRoute = UnAuthenticatedLoginImport.update({
  path: '/login',
  getParentRoute: () => UnAuthenticatedRoute,
} as any)

const AuthenticatedProfileRoute = AuthenticatedProfileImport.update({
  path: '/profile',
  getParentRoute: () => AuthenticatedRoute,
} as any)

const AuthenticatedOrdersRoute = AuthenticatedOrdersImport.update({
  path: '/orders',
  getParentRoute: () => AuthenticatedRoute,
} as any)

const AuthenticatedCartRoute = AuthenticatedCartImport.update({
  path: '/cart',
  getParentRoute: () => AuthenticatedRoute,
} as any)

const AuthenticatedCouponsRoute = AuthenticatedCouponsImport.update({
  path: '/Coupons',
  getParentRoute: () => AuthenticatedRoute,
} as any)

const AuthenticatedCategoriesRoute = AuthenticatedCategoriesImport.update({
  path: '/Categories',
  getParentRoute: () => AuthenticatedRoute,
} as any)

const AuthenticatedAdressesRoute = AuthenticatedAdressesImport.update({
  path: '/Adresses',
  getParentRoute: () => AuthenticatedRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/Products': {
      preLoaderRoute: typeof ProductsImport
      parentRoute: typeof rootRoute
    }
    '/_authenticated': {
      preLoaderRoute: typeof AuthenticatedImport
      parentRoute: typeof rootRoute
    }
    '/_unAuthenticated': {
      preLoaderRoute: typeof UnAuthenticatedImport
      parentRoute: typeof rootRoute
    }
    '/_authenticated/Adresses': {
      preLoaderRoute: typeof AuthenticatedAdressesImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/Categories': {
      preLoaderRoute: typeof AuthenticatedCategoriesImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/Coupons': {
      preLoaderRoute: typeof AuthenticatedCouponsImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/cart': {
      preLoaderRoute: typeof AuthenticatedCartImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/orders': {
      preLoaderRoute: typeof AuthenticatedOrdersImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/profile': {
      preLoaderRoute: typeof AuthenticatedProfileImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_unAuthenticated/login': {
      preLoaderRoute: typeof UnAuthenticatedLoginImport
      parentRoute: typeof UnAuthenticatedImport
    }
    '/_unAuthenticated/register': {
      preLoaderRoute: typeof UnAuthenticatedRegisterImport
      parentRoute: typeof UnAuthenticatedImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexLazyRoute,
  ProductsRoute,
  AuthenticatedRoute.addChildren([
    AuthenticatedAdressesRoute,
    AuthenticatedCategoriesRoute,
    AuthenticatedCouponsRoute,
    AuthenticatedCartRoute,
    AuthenticatedOrdersRoute,
    AuthenticatedProfileRoute,
  ]),
  UnAuthenticatedRoute.addChildren([
    UnAuthenticatedLoginRoute,
    UnAuthenticatedRegisterRoute,
  ]),
])
