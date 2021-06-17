import { MappingStrategy } from "./mappingStrategy";

export class AdvancedThemeBindingStrategy implements MappingStrategy {

  constructor() {}

  bindProperties(advancedTheme: any, tokens: any[]) {

    const allTokensCopy = JSON.parse(JSON.stringify(tokens));

    Object.keys(allTokensCopy).map( currentToken => {
      let tokenComponentName = currentToken.split('-')[2];
      let currentTokenComponent = advancedTheme[tokenComponentName];
      if (currentTokenComponent!== undefined) {
        Object.keys(currentTokenComponent).map(objectKey => {
          if (currentTokenComponent[objectKey]) {
            let tokenFullKey = `--${currentToken.split('-')[2]}-${objectKey}`;
            if (allTokensCopy[tokenFullKey]!==undefined){
              allTokensCopy[tokenFullKey] = currentTokenComponent[objectKey];
            }
          }
        });
      }
    });
    return allTokensCopy;
  }
}
