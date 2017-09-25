import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[OnlyAdmin]'
})
export class OnlyAdminDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {

    //only for demonstration purposes!!!
    if(localStorage['isAdmin'] == 'true') {

      this.viewContainer.createEmbeddedView(this.templateRef);

    } else {

      this.viewContainer.clear();

    }

  }

}
