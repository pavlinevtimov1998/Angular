import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-reg-form',
  templateUrl: './template-driven-reg-form.component.html',
  styleUrls: ['./template-driven-reg-form.component.css']
})
export class TemplateDrivenRegFormComponent implements OnInit, AfterViewInit {

  @ViewChild('registerForm') registerForm!: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    
  }
}
