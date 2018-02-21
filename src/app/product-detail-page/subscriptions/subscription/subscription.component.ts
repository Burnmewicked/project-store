import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {
  subscriptions: { name: string, data: string, minutes: string, fullPrice: string, DiscountPrice: string }[] = [
    { 'name': 'Purple Flex', 'data': '5 GB', minutes: '500 minutes', fullPrice: '$ 35,00', DiscountPrice: '$ 25,00' },
    { 'name': 'Purple Medium', 'data': '10 GB', minutes: 'Unlimited Calling', fullPrice: '$ 45,00', DiscountPrice: '$ 35,00' },
    { 'name': 'Purple Pro', 'data': '30 GB', minutes: 'Unlimited Calling', fullPrice: '$ 55,00', DiscountPrice: '$ 45,00' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
