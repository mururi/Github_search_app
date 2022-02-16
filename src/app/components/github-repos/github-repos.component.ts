import { Component, OnInit } from '@angular/core';
import { FetchProfileService } from 'src/app/services/fetch-profile.service';

@Component({
  selector: 'app-github-repos',
  templateUrl: './github-repos.component.html',
  styleUrls: ['./github-repos.component.css']
})
export class GithubReposComponent implements OnInit {

  userRepos: any;

  constructor(private fetchProfileService: FetchProfileService) { }

  getRepos() {
    //this.fetchProfileService.updateProfile(username);
    this.fetchProfileService.fetchRepoData().subscribe(repos => {
      console.log(repos);
      this.userRepos = repos;
    });
  }

  ngOnInit(): void {
    this.getRepos();
  }

}
