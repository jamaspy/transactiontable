import merchants from "../data/merchants.json";

export const merchantLookup = (merchantId) => {
  return merchants.find((merchant) => merchant.id === merchantId);
};
export const merchantNameLookup = (merchantName) => {
  return merchants.find(
    (merchant) => merchant.name.toLowerCase() === merchantName.toLowerCase()
  );
};
