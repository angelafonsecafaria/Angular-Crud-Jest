import { TestBed } from '@angular/core/testing';

import { GithubService } from './github.service';

describe('GithubService', () => {
  let service: GithubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GithubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getGitHubUserData', () => {
    const gitHubUserData = service.getGitHubUserData();
    const gitHubUserDataFiels = Object.keys(gitHubUserData);

    expect(typeof(gitHubUserData)).toBe('object');
    expect(gitHubUserDataFiels.length).toEqual(2);
    expect(gitHubUserDataFiels.includes('login') && gitHubUserDataFiels.includes('name')).toBeTruthy();
  })

  it('getGitHubUserProjects', () => {
    const gitHubUserData = service['getGitHubUserProjects']();
    const gitHubUserDataFiels = Object.keys(gitHubUserData);

    expect(typeof(gitHubUserData)).toBe('object');
    expect(gitHubUserDataFiels.length).toEqual(2);
    expect(gitHubUserDataFiels.includes('title') && gitHubUserDataFiels.includes('description')).toBeTruthy();
  });

  it('getGitHubUserVisits', (done) => {
    service['getGitHubUserVisits']().then(gitHubUserData => {
      const gitHubUserDataFiels = Object.keys(gitHubUserData);

      expect(typeof(gitHubUserData)).toBe('object');
      expect(gitHubUserDataFiels.length).toEqual(1);
      expect(gitHubUserDataFiels.includes('visits')).toBeTruthy();
      done();
    });
  });
});
