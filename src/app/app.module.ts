import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SubscriptionsComponent } from './product-detail-page/subscriptions/subscriptions.component';
import { ProductDetailPageComponent } from './product-detail-page/product-detail-page.component';
import { SubscriptionComponent } from './product-detail-page/subscriptions/subscription/subscription.component';
import { DeviceImageComponent } from './product-detail-page/device-image/device-image.component';
import { DevicePriceSliderComponent } from './product-detail-page/device-price-slider/device-price-slider.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SubscriptionsComponent,
    ProductDetailPageComponent,
    SubscriptionComponent,
    DeviceImageComponent,
    DevicePriceSliderComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
