import categories from "../data/categories.json";

export const categoryLookup = (categoryId) => {
  return categories.find((category) => category?.id === categoryId);
};
export const categoryNameLookup = (categoryName) => {
  return categories.find(
    (category) => category?.name.toLowerCase() === categoryName.toLowerCase()
  );
};
