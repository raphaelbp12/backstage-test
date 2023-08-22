import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { findOpenIssuesPlugin, FindOpenIssuesPage } from '../src/plugin';

createDevApp()
  .registerPlugin(findOpenIssuesPlugin)
  .addPage({
    element: <FindOpenIssuesPage />,
    title: 'Root Page',
    path: '/find-open-issues'
  })
  .render();
