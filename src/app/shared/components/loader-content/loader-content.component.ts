import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loader-content',
  templateUrl: './loader-content.component.html',
  styleUrls: ['./loader-content.component.css']
})
export class LoaderContentComponent {

  @Input() loading: boolean;
  @Input() empty: boolean;
  @Input() error: Error;

  constructor() { }
}
