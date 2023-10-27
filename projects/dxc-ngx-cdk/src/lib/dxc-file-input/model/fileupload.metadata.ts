import { fileData } from "./chunk.metadata";

export class FileMetaData {
    uploadId: string = "";
    fileChunks: Array<fileData> = [];
    totalChunks: number = 0;
    fileName: string = "";
}