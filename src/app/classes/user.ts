export class User {
  constructor(public login: string, public avatar_url: string, public repos_url: string, public name: string, public bio: string, public public_repos: number, public followers: number, public following: number, public created_at: Date){ }
}
