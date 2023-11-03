import OfferChild from "./OfferChild";

export interface ListingChildProps {
  items: {
    listing_id: number;
    url: string;
    MainImage: string;
    title: string;
    currency_code: string;
    price: string;
    quantity: number;
  }[];
}

export function Listing(props: ListingChildProps) {
  const { items } = props;
  const processedItems = items.map((item) => {
    const title = item.title && item.title.length > 50 ? item.title.substring(0, 50) + "..." : item.title;
    return {
      ...item,
      title,
    };
  });

  return (
    <div className="item-list">
      {processedItems.map((item) => (
        <OfferChild key={item.listing_id} item={item} />
      ))}
    </div>
  );
}

export default Listing;
