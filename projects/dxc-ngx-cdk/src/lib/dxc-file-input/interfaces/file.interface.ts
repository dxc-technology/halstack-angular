import { EventType } from "../services/fileupload.request.services";
export interface FileData{
    data: File;
    error: string;
    image: string | ArrayBuffer;
    eventtype: EventType;
    postresponse: string
}
