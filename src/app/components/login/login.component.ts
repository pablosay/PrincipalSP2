import { Component, OnInit, OnDestroy } from '@angular/core';
import { SocialAuthService } from "@abacritt/angularx-social-login";
import { SocialUser, GoogleLoginProvider } from "@abacritt/angularx-social-login";
import { Router } from '@angular/router';
import { UserServiceService } from '../servicios/user-service.service';
import { BackendService } from '../servicios/backend.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles:[`
    :host ::ng-deep .p-password input {
    width: 100%;
    padding:1rem;
    }

    :host ::ng-deep .pi-eye{
      transform:scale(1.6);
      margin-right: 1rem;
      color: var(--primary-color) !important;
    }

    :host ::ng-deep .pi-eye-slash{
      transform:scale(1.6);
      margin-right: 1rem;
      color: var(--primary-color) !important;
    }
  `]
})
export class LoginComponent implements OnInit, OnDestroy {

  user: SocialUser;
  loggedIn: boolean;

  constructor(private authService: SocialAuthService, private router: Router, private userservice: UserServiceService, private backend: BackendService){ }

  signOut(): void {
    this.authService.signOut();
  }

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      if(this.loggedIn == true){
        this.userservice.seIngreso(this.user);
        this.backend.RegisterOrIgnore(this.user.email, this.user.name).subscribe(res => {
          if(res.status == 1){
          } else {
          }
        });
        this.router.navigateByUrl('/usuario/perfilUsuario');
      }
    });
  }

  ngOnDestroy(): void {

  }
}
