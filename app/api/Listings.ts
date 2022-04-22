import { ProductProps } from "../screens/ProductStack/FeedScreen";
import apiClient from "./Client";

export const getListings = () => apiClient.get("/listings");
export const addListings = (listing: ProductProps, onuploadProgress: any) => {
  const data = new FormData() as any;
  data.append("title", listing.title);
  data.append("price", String(listing.price));
  data.append("categoryId", listing.categoryId);
  data.append("description", listing.description);

  listing?.images?.forEach((image, index) =>
    data.append("images", {
      type: "image/jpeg",
      uri: image,
      name: "image" + index,
    })
  );

  if (listing.location)
    data.append("location", JSON.stringify(listing.location));
  // console.log("Data", data);
  return apiClient.post("/listings", data, {
    onUploadProgress: (progress) =>
      onuploadProgress(progress.loaded / progress.total),
  });
};
