import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-create-theme',
  templateUrl: './create-theme.component.html',
  styleUrls: ['./create-theme.component.css'],
})
export class CreateThemeComponent implements OnInit {
  constructor(private router: Router, private themeService: ThemeService) {}

  ngOnInit(): void {}

  createThemeHandler(createThemeForm: NgForm): void {
    this.themeService.createTheme$(createThemeForm.value).subscribe((theme) => {
      console.log(theme);
      this.router.navigate(['/themes']);
    });
  }

  cancelHandler(): void {
    this.router.navigate(['/home']);
  }
}
