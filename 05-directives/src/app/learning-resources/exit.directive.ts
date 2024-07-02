import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appExit]',
  standalone: true,
  host: { '(click)': 'onExitPage($event)' },
})
export class ExitDirective {
  @Input('appExit')
  public urlQuery?: string;

  public onExitPage(event: MouseEvent) {
    if (confirm('You wanna exit?')) {
      const address = (event.target as HTMLAnchorElement).href;
      (event.target as HTMLAnchorElement).href = address + this.urlQuery;
      return true;
    }

    return false;
  }
}
