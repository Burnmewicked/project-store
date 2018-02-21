import { Component, OnInit } from '@angular/core';
import { DeviceImage } from './device-image.model';

@Component({
  selector: 'app-device-image',
  templateUrl: './device-image.component.html',
  styleUrls: ['./device-image.component.css']
})
export class DeviceImageComponent implements OnInit {
  deviceImages: DeviceImage[] = [
    new DeviceImage('../../assets/img/s8.png')
  ];

  constructor() { }

  ngOnInit() {
  }

}
