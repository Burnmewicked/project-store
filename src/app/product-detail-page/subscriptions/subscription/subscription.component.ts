import { Component, OnInit, Input } from '@angular/core';

import { Subscription } from '../subscription.model';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {
  @Input() subscription: Subscription;

  buttonSelected = false;

  constructor() { }

  ngOnInit() {
  }

  selectSubscription() {
    this.buttonSelected = !this.buttonSelected;
    console.log(this.buttonSelected);
  }
}
