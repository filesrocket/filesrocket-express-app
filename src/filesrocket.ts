import { Filesrocket } from "filesrocket";
import { LocalFileService } from "filesrocket-local";

const filesrocket = new Filesrocket();

filesrocket.register("local", new LocalFileService({
  pagination: { default: 15, max: 50 },
  directory: "uploads",
  host: "http://localhost:3030"
}));

export default filesrocket;
