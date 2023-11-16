import { ModuleWithProviders, NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';
import { MyLibService } from './my-lib.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    MyLibComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    MyLibComponent
  ]
})
export class MyLibModule { 
  static forRoot(configuration:SplunkConfiguration): ModuleWithProviders<MyLibModule> {
    console.log(`forRoot: ${JSON.stringify(configuration)}`);
    return {
      ngModule: MyLibModule,
      providers: [MyLibService,{provide: 'config', useValue: configuration}]
    };
  }
}

export class SplunkConfiguration{
  url:string=''
  token:string=''
}
