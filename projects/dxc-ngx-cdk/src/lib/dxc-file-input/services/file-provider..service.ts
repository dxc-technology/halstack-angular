import { InjectionToken, Type } from "@angular/core";
import { IFileService } from "../model/IFileService";

export const FILE_SERVICE = new InjectionToken<IFileService>("FILE_SERVICE");

export interface IFileServiceProvider {
  fileService: Type<IFileService>;
}
