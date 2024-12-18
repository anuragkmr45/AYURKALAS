"use client";

import { getProductsData } from "@/lib/getData";
import React, { useState, useEffect } from "react";
import { ProductData } from "../../types";
import ProductCard from "./ProductCard";
export const revalidate = 0;

type ProductListProps = {
  category?: string;
  brand?: string;
  minPrice?: number;
  maxPrice?: number;
  minRating?: number;
};

const  ProductList = ({ filters={}, sortOption="" }: { filters?: ProductListProps, sortOption?: string; }) => {

  const [products, setProducts] = useState<ProductData[]>([]);

  useEffect(() => {

    const handleGetProductData = async () => {
      const data = await getProductsData();
      setProducts(data);
    };

    handleGetProductData();
  }, []);

  // const sampleProducts: ProductData[] = [
  //   {
  //     title: "Ashwagandha Capsules",
  //     image: {
  //       _type: "image", asset: {
  //         _ref: "image-001",
  //         _type: "reference"
  //       }
  //     },
  //     quantity: 50,
  //     price: 399,
  //     rowprice: 499,
  //     category: [{ _id: "1", name: "Herbal Supplements" }],
  //     slug: {
  //       current: "ashwagandha-capsules",
  //       _type: "slug"
  //     },
  //     _createdAt: "2023-12-01",
  //     description: "Boosts energy, reduces stress, and enhances vitality.",
  //     _updatedAt: "2023-12-05",
  //     ratings: 4.7,
  //     brand: "HerbWellness",
  //     _type: "product",
  //     _id: "a1",
  //     position: "bestseller",
  //   },
  //   {
  //     title: "Triphala Powder",
  //     image: {
  //       _type: "image", asset: {
  //         _ref: "image-002",
  //         _type: "reference"
  //       }
  //     },
  //     quantity: 100,
  //     price: 299,
  //     rowprice: 349,
  //     category: [{ _id: "2", name: "Digestive Health" }],
  //     slug: {
  //       current: "triphala-powder",
  //       _type: "slug"
  //     },
  //     _createdAt: "2023-11-28",
  //     description: "Aids digestion and detoxifies the body naturally.",
  //     _updatedAt: "2023-12-01",
  //     ratings: 4.5,
  //     brand: "NatureVeda",
  //     _type: "product",
  //     _id: "a2",
  //     position: "essential",
  //   },
  //   {
  //     title: "Chyawanprash",
  //     image: {
  //       _type: "image", asset: {
  //         _ref: "image-003",
  //         _type: "reference"
  //       }
  //     },
  //     quantity: 200,
  //     price: 599,
  //     rowprice: 699,
  //     category: [{ _id: "3", name: "Immunity Boosters" }],
  //     slug: {
  //       current: "chyawanprash",
  //       _type: "slug"
  //     },
  //     _createdAt: "2023-12-02",
  //     description: "Traditional Ayurvedic formulation for immunity and health.",
  //     _updatedAt: "2023-12-06",
  //     ratings: 4.8,
  //     brand: "AyurCare",
  //     _type: "product",
  //     _id: "a3",
  //     position: "highlighted",
  //   },
  //   {
  //     title: "Neem Capsules",
  //     image: {
  //       _type: "image", asset: {
  //         _ref: "image-004",
  //         _type: "reference"
  //       }
  //     },
  //     quantity: 75,
  //     price: 249,
  //     rowprice: 299,
  //     category: [{ _id: "4", name: "Skin & Hair Care" }],
  //     slug: {
  //       current: "neem-capsules",
  //       _type: "slug"
  //     },
  //     _createdAt: "2023-11-30",
  //     description: "Purifies blood and supports skin health.",
  //     _updatedAt: "2023-12-03",
  //     ratings: 4.6,
  //     brand: "GreenHerb",
  //     _type: "product",
  //     _id: "a4",
  //     position: "featured",
  //   },
  //   {
  //     title: "Tulsi Drops",
  //     image: {
  //       _type: "image", asset: {
  //         _ref: "image-005",
  //         _type: "reference"
  //       }
  //     },
  //     quantity: 120,
  //     price: 199,
  //     rowprice: 249,
  //     category: [{ _id: "5", name: "Respiratory Health" }],
  //     slug: {
  //       current: "tulsi-drops",
  //       _type: "slug"
  //     },
  //     _createdAt: "2023-11-25",
  //     description: "Enhances respiratory health and provides immunity support.",
  //     _updatedAt: "2023-11-29",
  //     ratings: 4.9,
  //     brand: "HerbalDrops",
  //     _type: "product",
  //     _id: "a5",
  //     position: "premium",
  //   },
  //   {
  //     title: "Brahmi Powder",
  //     image: {
  //       _type: "image", asset: {
  //         _ref: "image-006",
  //         _type: "reference"
  //       }
  //     },
  //     quantity: 60,
  //     price: 349,
  //     rowprice: 399,
  //     category: [{ _id: "6", name: "Mental Wellness" }],
  //     slug: {
  //       current: "brahmi-powder",
  //       _type: "slug"
  //     },
  //     _createdAt: "2023-11-29",
  //     description: "Improves memory and cognitive function.",
  //     _updatedAt: "2023-12-01",
  //     ratings: 4.4,
  //     brand: "MindHerb",
  //     _type: "product",
  //     _id: "a6",
  //     position: "essential",
  //   },
  //   {
  //     title: "Amla Juice",
  //     image: {
  //       _type: "image", asset: {
  //         _ref: "image-007",
  //         _type: "reference"
  //       }
  //     },
  //     quantity: 150,
  //     price: 399,
  //     rowprice: 499,
  //     category: [{ _id: "7", name: "Vitamin C Boosters" }],
  //     slug: {
  //       current: "amla-juice",
  //       _type: "slug"
  //     },
  //     _createdAt: "2023-12-01",
  //     description: "Rich in Vitamin C, supports immunity and skin health.",
  //     _updatedAt: "2023-12-05",
  //     ratings: 4.7,
  //     brand: "FruitVeda",
  //     _type: "product",
  //     _id: "a7",
  //     position: "top",
  //   },
  //   {
  //     title: "Shatavari Tablets",
  //     image: {
  //       _type: "image", asset: {
  //         _ref: "image-008",
  //         _type: "reference"
  //       }
  //     },
  //     quantity: 30,
  //     price: 349,
  //     rowprice: 399,
  //     category: [{ _id: "8", name: "Women’s Health" }],
  //     slug: {
  //       current: "shatavari-tablets",
  //       _type: "slug"
  //     },
  //     _createdAt: "2023-11-27",
  //     description: "Supports hormonal balance and women’s health.",
  //     _updatedAt: "2023-11-30",
  //     ratings: 4.5,
  //     brand: "FemHerb",
  //     _type: "product",
  //     _id: "a8",
  //     position: "compact",
  //   },
  //   {
  //     title: "Herbal Pain Relief Oil",
  //     image: {
  //       _type: "image", asset: {
  //         _ref: "image-009",
  //         _type: "reference"
  //       }
  //     },
  //     quantity: 45,
  //     price: 299,
  //     rowprice: 349,
  //     category: [{ _id: "9", name: "Pain Relief" }],
  //     slug: {
  //       current: "herbal-pain-relief-oil",
  //       _type: "slug"
  //     },
  //     _createdAt: "2023-11-26",
  //     description: "Relieves joint and muscle pain effectively.",
  //     _updatedAt: "2023-11-29",
  //     ratings: 4.3,
  //     brand: "EaseHerb",
  //     _type: "product",
  //     _id: "a9",
  //     position: "featured",
  //   },
  //   {
  //     title: "Giloy Tablets",
  //     image: {
  //       _type: "image", asset: {
  //         _ref: "image-010",
  //         _type: "reference"
  //       }
  //     },
  //     quantity: 100,
  //     price: 249,
  //     rowprice: 299,
  //     category: [{ _id: "10", name: "Immunity Boosters" }],
  //     slug: {
  //       current: "giloy-tablets",
  //       _type: "slug"
  //     },
  //     _createdAt: "2023-11-28",
  //     description: "Strengthens immunity and fights infections.",
  //     _updatedAt: "2023-12-02",
  //     ratings: 4.6,
  //     brand: "HealthRoot",
  //     _type: "product",
  //     _id: "a10",
  //     position: "essential",
  //   },
  //   {
  //     title: "Turmeric Capsules",
  //     image: {
  //       _type: "image", asset: { _ref: "image-011", _type: "reference" }
  //     },
  //     quantity: 80,
  //     price: 349,
  //     rowprice: 399,
  //     category: [{ _id: "11", name: "Anti-Inflammatory" }],
  //     slug: { current: "turmeric-capsules", _type: "slug" },
  //     _createdAt: "2023-12-02",
  //     description: "Reduces inflammation and enhances immunity.",
  //     _updatedAt: "2023-12-05",
  //     ratings: 4.5,
  //     brand: "NatureGold",
  //     _type: "product",
  //     _id: "a11",
  //     position: "essential",
  //   },
  //   {
  //     title: "Moringa Powder",
  //     image: {
  //       _type: "image", asset: { _ref: "image-012", _type: "reference" }
  //     },
  //     quantity: 110,
  //     price: 299,
  //     rowprice: 349,
  //     category: [{ _id: "12", name: "Superfoods" }],
  //     slug: { current: "moringa-powder", _type: "slug" },
  //     _createdAt: "2023-12-03",
  //     description: "Packed with nutrients for overall health.",
  //     _updatedAt: "2023-12-06",
  //     ratings: 4.4,
  //     brand: "GreenLife",
  //     _type: "product",
  //     _id: "a12",
  //     position: "popular",
  //   },
  //   {
  //     title: "Aloe Vera Gel",
  //     image: {
  //       _type: "image", asset: { _ref: "image-013", _type: "reference" }
  //     },
  //     quantity: 70,
  //     price: 199,
  //     rowprice: 249,
  //     category: [{ _id: "13", name: "Skin Care" }],
  //     slug: { current: "aloe-vera-gel", _type: "slug" },
  //     _createdAt: "2023-12-05",
  //     description: "Soothes skin and reduces irritation.",
  //     _updatedAt: "2023-12-07",
  //     ratings: 4.8,
  //     brand: "GlowHerb",
  //     _type: "product",
  //     _id: "a13",
  //     position: "highlighted",
  //   },
  //   {
  //     title: "Ashoka Bark Tablets",
  //     image: {
  //       _type: "image", asset: { _ref: "image-014", _type: "reference" }
  //     },
  //     quantity: 40,
  //     price: 449,
  //     rowprice: 499,
  //     category: [{ _id: "14", name: "Women’s Health" }],
  //     slug: { current: "ashoka-bark-tablets", _type: "slug" },
  //     _createdAt: "2023-11-30",
  //     description: "Supports uterine health.",
  //     _updatedAt: "2023-12-01",
  //     ratings: 4.2,
  //     brand: "FemCare",
  //     _type: "product",
  //     _id: "a14",
  //     position: "compact",
  //   },
  //   {
  //     title: "Shilajit Resin",
  //     image: {
  //       _type: "image", asset: { _ref: "image-015", _type: "reference" }
  //     },
  //     quantity: 90,
  //     price: 899,
  //     rowprice: 999,
  //     category: [{ _id: "15", name: "Energy Boosters" }],
  //     slug: { current: "shilajit-resin", _type: "slug" },
  //     _createdAt: "2023-11-28",
  //     description: "Increases stamina and vitality.",
  //     _updatedAt: "2023-12-03",
  //     ratings: 4.7,
  //     brand: "MountainGold",
  //     _type: "product",
  //     _id: "a15",
  //     position: "premium",
  //   },
  //   {
  //     title: "Neem Oil",
  //     image: {
  //       _type: "image", asset: { _ref: "image-016", _type: "reference" }
  //     },
  //     quantity: 60,
  //     price: 249,
  //     rowprice: 299,
  //     category: [{ _id: "16", name: "Skin & Hair Care" }],
  //     slug: { current: "neem-oil", _type: "slug" },
  //     _createdAt: "2023-11-27",
  //     description: "Naturally purifies and protects skin.",
  //     _updatedAt: "2023-11-30",
  //     ratings: 4.3,
  //     brand: "HerbalOil",
  //     _type: "product",
  //     _id: "a16",
  //     position: "essential",
  //   },
  //   {
  //     title: "Herbal Tea",
  //     image: {
  //       _type: "image", asset: { _ref: "image-017", _type: "reference" }
  //     },
  //     quantity: 150,
  //     price: 199,
  //     rowprice: 249,
  //     category: [{ _id: "17", name: "Relaxation" }],
  //     slug: { current: "herbal-tea", _type: "slug" },
  //     _createdAt: "2023-11-26",
  //     description: "Calms the mind and promotes sleep.",
  //     _updatedAt: "2023-11-29",
  //     ratings: 4.9,
  //     brand: "TeaVeda",
  //     _type: "product",
  //     _id: "a17",
  //     position: "top",
  //   },
  //   {
  //     title: "Giloy Juice",
  //     image: {
  //       _type: "image", asset: { _ref: "image-018", _type: "reference" }
  //     },
  //     quantity: 120,
  //     price: 399,
  //     rowprice: 499,
  //     category: [{ _id: "18", name: "Immunity Boosters" }],
  //     slug: { current: "giloy-juice", _type: "slug" },
  //     _createdAt: "2023-12-01",
  //     description: "Boosts immunity naturally.",
  //     _updatedAt: "2023-12-03",
  //     ratings: 4.6,
  //     brand: "HealthRoot",
  //     _type: "product",
  //     _id: "a18",
  //     position: "bestseller",
  //   },
  //   {
  //     title: "Tulsi Ginger Tea",
  //     image: {
  //       _type: "image", asset: { _ref: "image-019", _type: "reference" }
  //     },
  //     quantity: 80,
  //     price: 349,
  //     rowprice: 399,
  //     category: [{ _id: "19", name: "Respiratory Health" }],
  //     slug: { current: "tulsi-ginger-tea", _type: "slug" },
  //     _createdAt: "2023-12-05",
  //     description: "Enhances respiratory function and digestion.",
  //     _updatedAt: "2023-12-07",
  //     ratings: 4.4,
  //     brand: "TeaTherapy",
  //     _type: "product",
  //     _id: "a19",
  //     position: "highlighted",
  //   },
  //   {
  //     title: "Brahmi Capsules",
  //     image: {
  //       _type: "image", asset: { _ref: "image-020", _type: "reference" }
  //     },
  //     quantity: 100,
  //     price: 299,
  //     rowprice: 349,
  //     category: [{ _id: "20", name: "Mental Wellness" }],
  //     slug: { current: "brahmi-capsules", _type: "slug" },
  //     _createdAt: "2023-11-29",
  //     description: "Boosts cognitive function.",
  //     _updatedAt: "2023-12-02",
  //     ratings: 4.5,
  //     brand: "MindCare",
  //     _type: "product",
  //     _id: "a20",
  //     position: "essential",
  //   },
  // ];

  const {
    category,
    brand,
    minPrice = 0,
    maxPrice = Number.MAX_VALUE,
    minRating = 0,
  } = filters;

  const filteredProducts = products.filter((product) => {
    // const inCategory = !category || product.category.some((c) => c.name === category);
    const inBrand = !brand || product.brand === brand;
    const inPriceRange = product.price >= minPrice && product.price <= maxPrice;
    const hasMinRating = product.ratings >= minRating;

    return inBrand && inPriceRange && hasMinRating;
    // return inCategory && inBrand && inPriceRange && hasMinRating;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case "priceLowHigh":
        return a.price - b.price;
      case "priceHighLow":
        return b.price - a.price;
      case "ratingHighLow":
        return b.ratings - a.ratings;
      case "newest":
        return new Date(b._createdAt).getTime() - new Date(a._createdAt).getTime();
      default:
        return 0; // No sorting
    }
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {/* {sampleProducts?.map((item) => <ProductCard item={item} key={item?._id} />)} */}
      {sortedProducts.length > 0 ? (
        sortedProducts.map((item) => (
          <ProductCard item={item} key={item._id} />
        ))
      ) : (
        <p>No products match the selected filters.</p>
      )}
    </div>
  );
};

export default ProductList;
