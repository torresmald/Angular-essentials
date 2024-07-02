import { Directive, TemplateRef, ViewContainerRef, computed, effect, inject } from '@angular/core';
import { AuthService } from './auth.service';

@Directive({
  selector: '[appAuth]',
  standalone: true
})
export class AuthDirective {

  private authService = inject(AuthService)
  private templateRef = inject(TemplateRef)
  private viewContainerRef = inject(ViewContainerRef)
  public isAdmin = computed<boolean>(() => {
    return this.authService.activePermission() === 'admin'
  })
  constructor() {
    effect(()=> {
      this.authService.activePermission() === 'admin' ? this.viewContainerRef.createEmbeddedView(this.templateRef) : this.viewContainerRef.clear()
    })
   }


}
