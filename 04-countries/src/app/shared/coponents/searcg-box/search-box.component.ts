import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [],
})
export class SearchBoxComponent implements OnInit {
  private debouncer: Subject<string> = new Subject<string>();

  @Input()
  public placeholder: string = '';

  @Output()
  public onValue = new EventEmitter<string>();

  emitValue(value: string): void {
    this.onValue.emit(value);
  }

  @Output()
  public onDebounce = new EventEmitter<string>();

  onKeyPress(searchTerm: string) {
    this.debouncer.next(searchTerm);
  }

  ngOnInit(): void {
    this.debouncer.pipe(debounceTime(500)).subscribe((value) => {
      console.log('debouncer value', value);
      this.onDebounce.emit(value);
    });
  }
}
