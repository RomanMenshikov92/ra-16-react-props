import Listing from "./ListingChild";
import etsyJson from "./data/etsy.json";
import "./listing.css";
// import noimage from "./img/noimage";

export function ListOffers() {
  const processedItems = etsyJson.map((item) => ({
    listing_id: item.listing_id || 0,
    url: item.url || "No url",
    MainImage: item.MainImage ? item.MainImage.url_570xN : "https://cdn1.ozone.ru/s3/multimedia-d/6434591725.jpg",
    title: item.title || "No title",
    currency_code: item.currency_code || "",
    price: item.price || "0",
    quantity: item.quantity || 0,
  }));

  return (
    <div>
      <Listing items={processedItems}></Listing>
    </div>
  );
}

export default ListOffers;
