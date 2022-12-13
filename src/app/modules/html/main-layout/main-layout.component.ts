import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit {
  user: string;

  leftMenu: { name: string; url: string }[] = [
    { name: 'Calendar', url: '/calendar' },
    { name: 'Input', url: '/input' },
    { name: ':host', url: '/host' },
    { name: 'sss', url: 'asdf' },
    { name: 'sss', url: 'asdf' },
    { name: 'sss', url: 'asdf' },
    { name: 'sss', url: 'asdf' },
    { name: 'sss', url: 'asdf' },
    { name: 'sss', url: 'asdf' },
    { name: 'sss', url: 'asdf' },
    { name: 'sss', url: 'asdf' },
    { name: 'sss', url: 'asdf' },
    { name: 'sss', url: 'asdf' },
    { name: 'sss', url: 'asdf' },
    { name: 'sss', url: 'asdf' },
  ];

  constructor(private activatedRoute: ActivatedRoute, private route: Router) {}

  ngOnInit(): void {
    this.user = this.activatedRoute.snapshot.paramMap.get('message');
  }

  onSelect(url: string) {
    console.log(url);
    this.route.navigate([`/html/layout/${url}`])
  }
}
