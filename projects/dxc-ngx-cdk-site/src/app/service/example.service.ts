import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Example } from '../model/example';
import { forkJoin } from 'rxjs';
import { Router } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {

  example: Example;

  rootExamplesPath = '/assets/examples/';

  relativePath:string;

  constructor(private http: HttpClient, @Inject(APP_BASE_HREF) public baseHref: string) {
    this.relativePath = this.relativePath.substring(this.relativePath.length);
  }

  getCodeExample(examplePath){
      const html =  this.getContentTab(`${this.relativePath}${this.rootExamplesPath}${examplePath}.html`);
      const ts =  this.getContentTab(`${this.relativePath}${this.rootExamplesPath}${examplePath}.ts`);
      const css =  this.getContentTab(`${this.relativePath}${this.rootExamplesPath}${examplePath}.scss`);
      return forkJoin([html, ts, css]);
  }

  getExampleFiles(files : Array<String>) {
    let result = [];

    files.forEach(file => {
      result.push(this.getContentTab(` ${this.relativePath}${this.rootExamplesPath}${file}.properties`))
    });

   return forkJoin(result);
  }

  generateExample({title, component, selector, examples}): Example{
    return { title: title ,
             htmlCode: examples[0] ,
             tsCode:  examples[1],
             cssCode:  examples[2],
             selector: selector,
             component: component
            };
  }

  private getContentTab(file){
    return this.http.get(file, {responseType: 'text'});
  }
}
