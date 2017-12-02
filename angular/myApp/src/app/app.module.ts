import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { ChildComponent } from './child/child.component';
import { FrameComponent } from './child/frame/frame.component';


@NgModule({          //tout se ce qui compose on importe le composent et je ke rajoute dans les declaration
  declarations: [  
    AppComponent,       // appel de nos composent existent
    HelloComponent,     // appel de nos composent existent
    ChildComponent,     // appel de nos composent existent
    FrameComponent      // appel de nos composent existent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [HelloComponent ]   // ce quil va demarrer en premier ( obligatoire ) 
})
export class AppModule { }
