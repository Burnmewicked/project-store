import { Component, OnInit } from '@angular/core';
import { Subscription } from './subscription.model';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.css']
})
export class SubscriptionsComponent implements OnInit {
  subscriptions: Subscription[] = [
    new Subscription('Purple Flex', '5 GB', '500 minutes', '$ 35,00', '$ 25,00'),
    new Subscription('Purple', '15 GB', 'Unlimited Calling', '$ 45,00', '$ 35,00'),
    new Subscription('Purple Pro', '45 GB', 'Unlimited Calling', '$ 65,00', '$ 55,00'),
  ];
  buttonSelected = false;

  constructor() { }

  ngOnInit() {
  }

  selectSubscription() {
    this.buttonSelected = !this.buttonSelected;
    console.log(this.buttonSelected);
  }

}
