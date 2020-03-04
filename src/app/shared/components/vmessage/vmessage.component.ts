import { Component, Input } from "@angular/core";

@Component({
    selector: 'pto-vmessage',
    templateUrl: './vmessage.component.html',
})

export class VMessageComponent {

    @Input() text = '';
}