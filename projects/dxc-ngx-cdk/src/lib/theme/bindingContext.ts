import { MappingStrategy } from "./mappingStrategy";
import { componentTokens } from './componentTokens';

export class BindingContext {
  constructor(private mappingStrategy: MappingStrategy) {}

  setMappingStrategy(mappingStrategy: MappingStrategy) {
    this.mappingStrategy = mappingStrategy;
  }

  bindProperties(theme:any){
      return this.mappingStrategy.bindProperties(theme,componentTokens);
  }

}
