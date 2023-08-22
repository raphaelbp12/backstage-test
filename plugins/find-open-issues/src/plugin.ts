import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const findOpenIssuesPlugin = createPlugin({
  id: 'find-open-issues',
  routes: {
    root: rootRouteRef,
  },
});

export const FindOpenIssuesPage = findOpenIssuesPlugin.provide(
  createRoutableExtension({
    name: 'FindOpenIssuesPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
