import { findOpenIssuesPlugin } from './plugin';

describe('find-open-issues', () => {
  it('should export plugin', () => {
    expect(findOpenIssuesPlugin).toBeDefined();
  });
});
