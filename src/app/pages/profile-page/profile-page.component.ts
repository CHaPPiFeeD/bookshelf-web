import { Component, OnInit } from "@angular/core";
import { UserApiService } from "../../api/user.api.service";
import { ActivatedRoute, Router } from "@angular/router";
import { UserProfileData } from "./profile-page.interface";


@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.scss'
})
export class ProfilePageComponent implements OnInit {
  userId!: string;
  userProfile!: UserProfileData;
  isSelfUserProfile: boolean = false;

  constructor(
    private userApiService: UserApiService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}
  
  async ngOnInit(): Promise<void> {
    this.userId = this.route.snapshot.params['id'];
    this.isSelfUserProfile = localStorage.getItem('user_id') === this.userId;
    this.loadUserProfile();
  }

  loadUserProfile() {
    this.userApiService.getUserProfile(this.userId).subscribe({
      next: (res) => {
        this.userProfile = res;
      },
      error: (e) => {
        console.error(e);
      }
    })
  }

  toEditProfile() {
    this.router.navigate(['profile', localStorage.getItem('user_id'), 'edit'])
  }
}