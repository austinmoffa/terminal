import { Component, OnInit } from '@angular/core';
import {TypewriterComponent} from './typewriter.component';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss']
})
export class TerminalComponent implements OnInit {
	texts: any = [
		{text: 'Hello.', done: false},
		{text: 'Welcome.', done: false},
		{text: 'Here is some text...', done: false},
		{text: 'Another line of text. Oh joy.', done:false},
		{text: 'This is a good way to do things.', done:false}
	]
		
	

  constructor() { }

  ngOnInit() {
  }

}
