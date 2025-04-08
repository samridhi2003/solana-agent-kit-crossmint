/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as SignupImport } from './routes/signup'
import { Route as LogoutImport } from './routes/logout'
import { Route as LoginImport } from './routes/login'
import { Route as AuthedImport } from './routes/_authed'
import { Route as IndexImport } from './routes/index'
import { Route as AuthedChatsRouteImport } from './routes/_authed/chats.route'
import { Route as AuthedChatsIndexImport } from './routes/_authed/chats.index'
import { Route as AuthedChatsChatIdImport } from './routes/_authed/chats.$chatId'

// Create/Update Routes

const SignupRoute = SignupImport.update({
  id: '/signup',
  path: '/signup',
  getParentRoute: () => rootRoute,
} as any)

const LogoutRoute = LogoutImport.update({
  id: '/logout',
  path: '/logout',
  getParentRoute: () => rootRoute,
} as any)

const LoginRoute = LoginImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const AuthedRoute = AuthedImport.update({
  id: '/_authed',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const AuthedChatsRouteRoute = AuthedChatsRouteImport.update({
  id: '/chats',
  path: '/chats',
  getParentRoute: () => AuthedRoute,
} as any)

const AuthedChatsIndexRoute = AuthedChatsIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => AuthedChatsRouteRoute,
} as any)

const AuthedChatsChatIdRoute = AuthedChatsChatIdImport.update({
  id: '/$chatId',
  path: '/$chatId',
  getParentRoute: () => AuthedChatsRouteRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/_authed': {
      id: '/_authed'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AuthedImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginImport
      parentRoute: typeof rootRoute
    }
    '/logout': {
      id: '/logout'
      path: '/logout'
      fullPath: '/logout'
      preLoaderRoute: typeof LogoutImport
      parentRoute: typeof rootRoute
    }
    '/signup': {
      id: '/signup'
      path: '/signup'
      fullPath: '/signup'
      preLoaderRoute: typeof SignupImport
      parentRoute: typeof rootRoute
    }
    '/_authed/chats': {
      id: '/_authed/chats'
      path: '/chats'
      fullPath: '/chats'
      preLoaderRoute: typeof AuthedChatsRouteImport
      parentRoute: typeof AuthedImport
    }
    '/_authed/chats/$chatId': {
      id: '/_authed/chats/$chatId'
      path: '/$chatId'
      fullPath: '/chats/$chatId'
      preLoaderRoute: typeof AuthedChatsChatIdImport
      parentRoute: typeof AuthedChatsRouteImport
    }
    '/_authed/chats/': {
      id: '/_authed/chats/'
      path: '/'
      fullPath: '/chats/'
      preLoaderRoute: typeof AuthedChatsIndexImport
      parentRoute: typeof AuthedChatsRouteImport
    }
  }
}

// Create and export the route tree

interface AuthedChatsRouteRouteChildren {
  AuthedChatsChatIdRoute: typeof AuthedChatsChatIdRoute
  AuthedChatsIndexRoute: typeof AuthedChatsIndexRoute
}

const AuthedChatsRouteRouteChildren: AuthedChatsRouteRouteChildren = {
  AuthedChatsChatIdRoute: AuthedChatsChatIdRoute,
  AuthedChatsIndexRoute: AuthedChatsIndexRoute,
}

const AuthedChatsRouteRouteWithChildren =
  AuthedChatsRouteRoute._addFileChildren(AuthedChatsRouteRouteChildren)

interface AuthedRouteChildren {
  AuthedChatsRouteRoute: typeof AuthedChatsRouteRouteWithChildren
}

const AuthedRouteChildren: AuthedRouteChildren = {
  AuthedChatsRouteRoute: AuthedChatsRouteRouteWithChildren,
}

const AuthedRouteWithChildren =
  AuthedRoute._addFileChildren(AuthedRouteChildren)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '': typeof AuthedRouteWithChildren
  '/login': typeof LoginRoute
  '/logout': typeof LogoutRoute
  '/signup': typeof SignupRoute
  '/chats': typeof AuthedChatsRouteRouteWithChildren
  '/chats/$chatId': typeof AuthedChatsChatIdRoute
  '/chats/': typeof AuthedChatsIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '': typeof AuthedRouteWithChildren
  '/login': typeof LoginRoute
  '/logout': typeof LogoutRoute
  '/signup': typeof SignupRoute
  '/chats/$chatId': typeof AuthedChatsChatIdRoute
  '/chats': typeof AuthedChatsIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/_authed': typeof AuthedRouteWithChildren
  '/login': typeof LoginRoute
  '/logout': typeof LogoutRoute
  '/signup': typeof SignupRoute
  '/_authed/chats': typeof AuthedChatsRouteRouteWithChildren
  '/_authed/chats/$chatId': typeof AuthedChatsChatIdRoute
  '/_authed/chats/': typeof AuthedChatsIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | ''
    | '/login'
    | '/logout'
    | '/signup'
    | '/chats'
    | '/chats/$chatId'
    | '/chats/'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '' | '/login' | '/logout' | '/signup' | '/chats/$chatId' | '/chats'
  id:
    | '__root__'
    | '/'
    | '/_authed'
    | '/login'
    | '/logout'
    | '/signup'
    | '/_authed/chats'
    | '/_authed/chats/$chatId'
    | '/_authed/chats/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AuthedRoute: typeof AuthedRouteWithChildren
  LoginRoute: typeof LoginRoute
  LogoutRoute: typeof LogoutRoute
  SignupRoute: typeof SignupRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AuthedRoute: AuthedRouteWithChildren,
  LoginRoute: LoginRoute,
  LogoutRoute: LogoutRoute,
  SignupRoute: SignupRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/_authed",
        "/login",
        "/logout",
        "/signup"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/_authed": {
      "filePath": "_authed.tsx",
      "children": [
        "/_authed/chats"
      ]
    },
    "/login": {
      "filePath": "login.tsx"
    },
    "/logout": {
      "filePath": "logout.tsx"
    },
    "/signup": {
      "filePath": "signup.tsx"
    },
    "/_authed/chats": {
      "filePath": "_authed/chats.route.tsx",
      "parent": "/_authed",
      "children": [
        "/_authed/chats/$chatId",
        "/_authed/chats/"
      ]
    },
    "/_authed/chats/$chatId": {
      "filePath": "_authed/chats.$chatId.tsx",
      "parent": "/_authed/chats"
    },
    "/_authed/chats/": {
      "filePath": "_authed/chats.index.tsx",
      "parent": "/_authed/chats"
    }
  }
}
ROUTE_MANIFEST_END */
