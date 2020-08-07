import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Example } from '../model/example';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {

  example: Example;

  rootExamplesPath = '/assets/examples/';

  constructor(private http: HttpClient) {
  }

  getCodeExample(examplePath){
      const html =  this.getContentTab(`${this.rootExamplesPath}${examplePath}.html`);
      const ts =  this.getContentTab(`${this.rootExamplesPath}${examplePath}.ts`);
      const css =  this.getContentTab(`${this.rootExamplesPath}${examplePath}.scss`);
      return forkJoin([html, ts, css]);
  }

  getExampleFiles(files : Array<String>) {
    let result = [];

    files.forEach(file => {
      result.push(this.getContentTab(`${this.rootExamplesPath}${file}.properties`))
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
