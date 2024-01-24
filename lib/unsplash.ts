import { createApi } from "unsplash-js";

const accessKey = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY;
if (!accessKey) {
  throw new Error("Unsplash access key missing.");
}

export const unsplash = createApi({
  accessKey: accessKey,
  fetch: fetch,
});
