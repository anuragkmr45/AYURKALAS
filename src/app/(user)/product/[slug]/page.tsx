import Container from "@/components/Container";
import { groq } from "next-sanity";
import { ProductData } from "../../../../../types";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import ProductInfo from "@/components/ProductInfo";
import { getBestSellersData } from "@/lib/getData";
import ProductCard from "@/components/ProductCard";

interface Props {
  params: {
    slug: string;
  };
}

const SingleProductPage = async ({ params: { slug } }: Props) => {
  const query = groq`*[_type == 'product' && slug.current == $slug][0]{
        ...
      }`;

  const product: ProductData = await client.fetch(query, { slug });
  const bestSellersData: ProductData[] = await getBestSellersData();

  return (
    <Container className="my-10 bg-bgLight">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-4 h-full p-4">
        <div className="h-full xl:col-span-2">
          <Image
            // src={urlFor(product?.image).url()}
            src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAFwAXAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIFBgcDBAj/xAA8EAABBAECAwYEAwMNAQAAAAABAAIDBBEFIRIxQQYHE1FhcSKBkdFUobEmMpMXM0NSY3KChJSywcLwFP/EABoBAQADAQEBAAAAAAAAAAAAAAABAgMEBQb/xAAiEQACAQMEAgMAAAAAAAAAAAAAAQIDETEEEhMhUaFBcZH/2gAMAwEAAhEDEQA/ANgSZQUIASowvLq+oQ6RpVrUbLXuirRmRzWDLjjoEB6t/NLhZZY733DetoYwRkGW1jr5Bqij316nxYbolMDPWd58vT1QG0YSLIanfHflZxyaLV6bNncPL09Vbuxvb2DtNqMmnuoPq2WROlB8TjY4AgHfAIPxDogLgkynEJEAmUuUiEAHmlCOqcEAAKB7wR+xOsAczWIA8ySFYQF4O0NGDUtDuVbUhjhfGSXhwHDjcHJ9QEB80Pjexg4mEYb19woTjAcM9CM/l9lctar6fDYext+J4HVsmQfoVSpYmCV4bMCMnGCq7kacciU0zL4Ngen/AF+y0LugY5nbV7ntLWvpShpPU8UZx9AfoqHoQp+E1ktlrXk8iStZ7qaFCTWLNmG22aWrA3ga12cF/ECfkAPqFO5EODRp5CaV1ITCFJQ5oTimoBU8JvVPagHBZv3haq59h1dxzHGSGsP7oIPPHnkc+n1zpIXjfUqySuL60LiScl0YJ5qGi0Wk7s+btefBIwyWCMjk4HBVW8SMn95v1X2B/wDLVjhLm0oXkcmtibkrwNM0jHOjqRN32Arcttx67539lXjuXddJ4Pl7S68FqRzZH8ugcN1bdKpw1pY5K7nwTMOWTRSEPYfMFb5psle3xtkrRlzSQT4TcZB3Hui3SqZ3qwfwm/ZRxtfJZV4yWDx9kdTm1bQobFvhNljnwzOaMBzmHHEB0yMHHTKlyuFCKOGAthjZG0uJwxoAz57LuVoYvJzKanlNPNCBRzTgmdU4IDoCo3VbE1eEPruha4ygEyvDRjckDPU4x81IhVbVdf0OxJJTltwOlhmcHseHfC4cTTyHTKIpNpLJ6orWtZEfiwukad2s4HF2NsAD12JOANvUKW08ajJO4ahGPA4Twh3ATxcR8unDjHzz0Vf0zXNEq2DNLqEbn/FgtDsuLjk52898ct/ZSknbTQYxl94N92EKXJGcHHLl7IrW+0FzR79uKCtVigbIxrJDFnYtaSSA4ZAJPlyULF3iMt34YiYWQnAe5zDxOJ8vi2/P35Zi+8W0L0hvV5JJaUgBZIyM8I2A4Sep6/4gqrS0KWdleepI+d3is4mhgAa3Yu69ORwOi5nUcr26sfRUdJQ4FOWWb/V/myPVPKj9D1Snq1R9ihL4sTZSwnGNwAcfmF73FdCdzxBpTTzSlNQC9UoKaUoQDwVgGvyPj7SasY3uYTdnGWnH9I5b7lYnrFezR7SanOXOjZLZnLXx8LiQZCeR9ltRnGLd2cOupTqKKgm/ohW2Z8Y8eXH98ofPNI3hfNI5uc4c8kKRdrbIC58l18ZJHxGvHtsAcfLZR17VKFhrOG6x727btYwY+X/vZdSqR8o8memqpYf4dGX7rIxGy5ZawDAa2ZwA9hlc337v42z/ABnfdedliGQ4jlY4+jsqRJjloNrRVyZc54+BoJOc88/8KkuFd9ei1KjqpdJS9mld0Z/ZmwT+Nf8A7GK6Eqnd1cElfs3M2UAE3JCMHPINH6gq3krkm05No9yhFxpRjJdgUiEKpsBQgoQAdwQeRULa7JaDbeXzadGXnm4Eg/qppCBOxU5u7fstOMSUZseQsyfdcP5KuyP4Kx/q5PuroEKNqLb5eSow92nZaA5jpTD/ADUn3Xuh7FdnYSCNPDj/AGkjn/qVYEibV4DnJ/Jwp0qtGPw6kDImf1WDAXdCFJUEIQgP/9k='
            alt="product image"
            className="w-full h-full object-contain"
            width={500}
            height={500}
            priority
          />
        </div>
        <div className="w-full md:col-span-2 xl:col-span-3 xl:p-14 flex flex-col gap-6 justify-center">
          <ProductInfo product={product} />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {bestSellersData?.map((item) => (
          <ProductCard item={item} key={item?._id} />
        ))}
      </div>
    </Container>
  );
};

export default SingleProductPage;
