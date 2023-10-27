import { EventType } from "./fileuploadrequest.data";
export interface FileData {
  data: FileInfo;
  error: string;
  image: string | ArrayBuffer;
  eventType: EventType;
  postResponse: Array<string>;
  progress: { value: number; status: "success" | "failed" | "progress" };
}
export interface FileInfo extends File {
  uniqueFileName: string;
}

export interface FilesData {
  files: Array<FileData>;
  event: string;
}
