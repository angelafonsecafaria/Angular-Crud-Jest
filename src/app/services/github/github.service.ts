import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor() { }

  public getGitHubUserData(): object {
    return {
      login: 'jota-oliveira',
      name: 'João Henrique de Oliveira Júnior'
    };
  }

  private getGitHubUserProjects(): object {
    return {
      title: 'Challenge-Api-Rest',
      description: 'Teste'
    };
  }

  private async getGitHubUserVisits(): Promise<object> {
    return {
      visits: '45265',
    };
  }
}
