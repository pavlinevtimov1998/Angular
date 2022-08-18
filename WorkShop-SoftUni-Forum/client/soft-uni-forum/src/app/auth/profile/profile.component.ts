import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {
  MessageBusService,
  MessageType,
} from 'src/app/core/message-bus.service';
import { IUser } from 'src/app/interfaces';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  @ViewChild('editProfileForm') editProfileForm!: NgForm;

  user!: IUser;
  isEditMode: boolean = false;

  constructor(
    private userServie: UserService,
    private router: Router,
    private messageBus: MessageBusService
  ) {}

  ngOnInit(): void {
    this.userServie.getProfile$().subscribe((user) => {
      this.user = user;
    });
  }

  turnEditMode(): void {
    this.isEditMode = true;

    setTimeout((): void => {
      this.editProfileForm.form.patchValue({
        username: this.user.username,
        email: this.user.email,
      });
    });
  }

  editProfile(editProfileForm: NgForm): void {
    this.userServie.editProfile$(editProfileForm.value).subscribe((user) => {
      this.user = user;
      this.isEditMode = false;

      this.messageBus.notifyForMessage({
        text: 'Successfuly edit profile!',
        type: MessageType.Success,
      });
    });
  }
}
