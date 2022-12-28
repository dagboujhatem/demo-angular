import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-directive',
  templateUrl: './custom-directive.component.html',
  styleUrls: ['./custom-directive.component.scss'],
})
export class CustomDirectiveComponent implements OnInit {
  jokes = [
    {
      setup: 'What did the cheese say when it looked in the mirror?',
      punchline: 'Hello-me (Halloumi)',
      hide: true,
    },
    {
      setup: 'What kind of cheese do you use to disguise a small horse?',
      punchline: 'Mask-a-pony (Mascarpone)',
      hide: true,
    },
    {
      setup: 'A kid threw a lump of cheddar at me',
      punchline: 'I thought ‘That’s not very mature’',
      hide: true,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
  toggle(i: number) {
    this.jokes[i].hide = !this.jokes[i].hide;
  }
}
