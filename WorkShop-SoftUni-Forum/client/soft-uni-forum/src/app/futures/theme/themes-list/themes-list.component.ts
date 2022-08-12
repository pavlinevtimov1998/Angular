import { Component, Input, OnInit } from '@angular/core';
import { ITheme } from 'src/app/interfaces/theme';

@Component({
  selector: 'app-themes-list',
  templateUrl: './themes-list.component.html',
  styleUrls: ['./themes-list.component.css']
})
export class ThemesListComponent implements OnInit {

  @Input() theme!: ITheme;

  constructor() { }

  ngOnInit(): void {
  }

}
