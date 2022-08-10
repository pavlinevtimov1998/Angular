import { Component, Input, OnInit } from '@angular/core';
import { ITheme } from '../interfaces/theme';

@Component({
  selector: 'app-themes-item',
  templateUrl: './themes-item.component.html',
  styleUrls: ['./themes-item.component.css']
})
export class ThemesItemComponent implements OnInit {

  @Input() theme!: ITheme;

  constructor() { }

  ngOnInit(): void {
  }

}
