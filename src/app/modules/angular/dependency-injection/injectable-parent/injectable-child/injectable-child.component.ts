import { Component, OnInit } from '@angular/core';
import { InjectableService } from '../../injectable-service';

@Component({
  selector: 'etx-injectable-child',
  templateUrl: './injectable-child.component.html',
  styleUrls: ['./injectable-child.component.scss'],
  providers:[InjectableService] 
  /* if this line is removed and the InjectableService is not specificaly defined as provider
  than Angular will look up in the app tree until it reacesh the root component
  in order to find a provider for InjectableService
  */

  /* If this line is removed will we see in console that only one instance of InjectableService is created and this one is from parent component
  otherwise two instances is going to be created : one for the child-component and other for parent-component
  */
})
export class InjectableChildComponent implements OnInit {

  constructor(private injectableService: InjectableService) {
     console.log(" Child component " + injectableService.id)
    }

  ngOnInit(): void {
  }

}
