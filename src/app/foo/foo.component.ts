import { Component, OnInit } from '@angular/core';
import {VERSION} from '@angular/material';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.scss']
})
export class FooComponent implements OnInit {

  title = 'app';
  version = VERSION;

  constructor() { }

  ngOnInit() {
  }

}
