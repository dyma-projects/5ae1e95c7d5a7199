import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({ selector: '[myColor]' })
export class ColorDirective {

    @HostBinding('style.color') myColor: string = 'black';

    @HostListener('window:keyup', ['$event']) pressKey(event: KeyboardEvent) {

        switch (event.code) {
            case 'ArrowDown': this.myColor = 'green'; break;
            case 'ArrowUp': this.myColor = 'blue'; break;
            case 'ArrowLeft': this.myColor = 'orange'; break;
            case 'ArrowRight': this.myColor = 'red'; break;
        }

    }

}
