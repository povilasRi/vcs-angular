import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mokymai-header',
  template: `<div class="fixed-top text-center bg-dark text-white">
    <h2>Angular pamoka</h2>
  </div> `,
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
