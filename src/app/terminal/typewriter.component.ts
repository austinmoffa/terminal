import { Component, OnInit, Input} from '@angular/core';
import { Observable, of, interval, pipe} from 'rxjs';
import { takeUntil, map, filter} from 'rxjs/operators';

@Component({
	selector: 'app-typewriter',
	templateUrl: './typewriter.component.html',
	styleUrls: ['./typewriter.component.scss']
})
export class TypewriterComponent implements OnInit {
	@Input() text: any;
	display: string = '';

	constructor() { }

	typeText() {
		var inter$:Observable<any> = interval(100);
		var textdone$ = inter$.pipe(filter(val => val >= this.text.text.length));
		inter$ = inter$.pipe(
			map(x => {
				return this.text.text[x];
			}),
			takeUntil(textdone$)
		);
		inter$.subscribe(
			data => this.display += data,
			() => {},
			() => this.text.done = true
		);

	}

	ngOnInit() {
		this.typeText();
	}

}
