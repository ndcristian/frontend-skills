import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appNgDirectives]'
})
export class NgDirectivesDirective {

  constructor() { }

  /* in this way all other classes are removed and add the highlighted class */
  // @HostBinding('className')
  // get cssClasses(){
  //   return 'lighlighted'
  // }

  /* in this way all others classes are kept and add a new one highlihghted */
  @HostBinding('class.highlighted')
  get cssClasses(){
    return true
  }

}
