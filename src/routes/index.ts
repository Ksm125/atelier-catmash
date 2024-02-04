import { lazy } from 'react';
import {type RouteObject} from 'react-router'

export const routes: RouteObject[] = [
  {
    path: '/',
    id: 'home',
    Component: lazy(() => import('../pages/home').then(({ Home }) => ({ default: Home }))),
  },
  {
    path: '/polls',
    id: 'polls',
    Component: lazy(() => import('../pages/polls').then(({ Polls }) => ({ default: Polls }))),
  }
];