import { Component, OnInit } from "@angular/core";
import { UserApiService } from "../../api/user.api.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.scss'
})
export class ProfilePageComponent implements OnInit {
  userId!: string;
  userProfile: any;


  constructor(
    private userApiService: UserApiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['id'];
    this.loadUserProfile();
  }

  loadUserProfile() {
    this.userApiService.getUserProfile(this.userId).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (e) => {
        console.error(e);
      }
    })
  }
}