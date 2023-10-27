export class fileData {
    fileName: string = "";
    fileSize: number = 0;
    fileType: string = "";
    chunkNumber: number = 0;
    uploadId: string = "";
    chunkSize: number = 0;
}

export class ChunkMetaData extends fileData {
    file: File | any = null;
}