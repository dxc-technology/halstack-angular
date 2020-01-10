import { css } from "emotion";
import { spaces } from "./variables.js";

export class CssUtils {
    getMargin(marginType, margin) {
        switch (marginType) {
            case 'left':   
                return margin && margin !== 'object' ? css` margin-left: ${spaces[margin]};` : css``;
            case 'top':
                return margin && margin !== 'object' ?  css` margin-top: ${spaces[margin]};` : css``;
            case 'right':
                return margin && margin !== 'object' ?  css` margin-right: ${spaces[margin]};` : css``;
            case 'bottom':
                return margin && margin !== 'object' ?  css` margin-bottom: ${spaces[margin]};` : css``;
            default:
                return margin && margin !== 'object' ? css` margin: ${spaces[margin]};` : css`margin: 0px;`;
        }
    }


    getPadding(paddingType, padding) {
        switch (paddingType) {
            case 'left':   
                return padding && padding !== 'object' ? css` padding-left: ${spaces[padding]};` : css``;
            case 'top':
                return padding && padding !== 'object' ?  css` padding-top: ${spaces[padding]};` : css``;
            case 'right':
                return padding && padding !== 'object' ?  css` padding-right: ${spaces[padding]};` : css``;
            case 'bottom':
                return padding && padding !== 'object' ?  css` padding-bottom: ${spaces[padding]};` : css``;
            default:
                return padding && padding !== 'object' ? css` padding: ${spaces[padding]};` : css`padding: 0px;`;
        }
    }

    getBoxShadow(shadowDepth){
        switch (shadowDepth) {
            case '1':
                return css`
                    box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);` ;
            case '2':
                return  css`
                    box-shadow: 0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12);`;
            default:
                return css`box-shadow: none;`;
        }
    }

}

