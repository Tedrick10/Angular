import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding-example',
  templateUrl: './databinding-example.component.html',
  styleUrls: ['./databinding-example.component.css']
})
export class DatabindingExampleComponent implements OnInit {
  username: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  resetUsername(): void {
    this.username = "";
  }
}
