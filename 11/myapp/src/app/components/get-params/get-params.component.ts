import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-get-params',
  templateUrl: './get-params.component.html',
  styleUrls: ['./get-params.component.css']
})
export class GetParamsComponent implements OnInit {

  myParams: Object;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    //subscribe to router event
    this.activatedRoute.params.subscribe((params: Params) => {
      console.log(params);
      this.myParams = params;
    });

  }

}
