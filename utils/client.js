import client from "@sanity/client";
import config from "./config";

export default client({
  projectId: config.projectId,
  dataset: config.dataset,
  apiVersion: "2022-07-18",
  useCdn: true,
});
