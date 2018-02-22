import { Component, OnInit } from '@angular/core';
import { Subscription } from './subscription.model';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.css']
})
export class SubscriptionsComponent implements OnInit {
  subscriptions: Subscription[] = [
    new Subscription('Basic', '5 GB', '500 minutes', '$ 35,00', '$ 25,00'),
    new Subscription('Flex', '15 GB', 'Unlimited Calling', '$ 45,00', '$ 35,00'),
    new Subscription('Pro', '45 GB', 'Unlimited Calling', '$ 65,00', '$ 55,00'),
    new Subscription('1337', '45 GB', 'Unlimited Calling', '$ 159,00', '$ 135,00')
  ];

  constructor() { }

  ngOnInit() {
  }
}
