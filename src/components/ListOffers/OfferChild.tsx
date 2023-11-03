export interface OfferPropsChild {
  item: {
    listing_id: number;
    url: string;
    MainImage: string;
    title: string;
    currency_code: string;
    price: string;
    quantity: number;
  };
}

function OfferChild(props: OfferPropsChild) {
  const { item } = props;

  const processedCurrencyCode = (currency: string, price: string) => {
    if (item.currency_code === "USD") {
      return `$${price}`;
    } else if (item.currency_code === "EUR") {
      return `€${price}`;
    } else {
      return `${price} ${currency}`;
    }
  };

  const processedQuantityLevel = (quantity: number) => {
    if (quantity <= 10) {
      return "level-low";
    } else if (quantity <= 20) {
      return "level-medium";
    } else {
      return "level-high";
    }
  };

  return (
    <div className="item" id={item.listing_id + ""}>
      <div className="item-image">
        <a href={item.url}>
          <img src={item.MainImage} alt={item.title} />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{item.title}</p>
        <p className="item-price">{processedCurrencyCode(item.currency_code, item.price)}</p>
        <p className={`item-quantity ${processedQuantityLevel(item.quantity)}`}>{item.quantity} left</p>
      </div>
    </div>
  );
}

export default OfferChild;
