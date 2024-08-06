import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";

export default function manakish() {
  return (
    <MaxWidthWrapper>
      <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
        <div className=" container mx-auto p-4">
          <h1>Manakish</h1>
          <p className="mt-4 text-sm max-w-prose text-muted-foregroun text-center flex  items-center md:ml-20">
            Welcome to Turkish Delight, where authentic flavors meet tradition.
            Enjoy our exquisite menu of peda, chanar and manakish.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6  items-center my-6">
            <Link href="/peda">
              <ProductCard
                image="/category/peda.jpg"
                title="peda"
                description="peda types"
              />
            </Link>
            <Link href="/chanar">
              <ProductCard
                image="/category/peda.jpg"
                title="chanar"
                description="chanar types"
              />
            </Link>
            <Link href="/manakish">
              <ProductCard
                image="/category/manakish.jpg"
                title="manakish"
                description="manakish types"
              />
            </Link>
            <Link href="/appetizers">
              <ProductCard
                image="/category/Appetizers.jpg"
                title="Appetizers"
                description="Appetizers types"
              />
            </Link>
            <Link href="/hot-drinks">
              <ProductCard
                image="/category/hotDrinks.jpg"
                title="Hot Drinks"
                description="Hot Drinks"
              />
            </Link>
            <Link href="/cold-drinks">
              <ProductCard
                image="/category/coldDrinks.jpg"
                title="Cold Drinks"
                description="Cold Drinks"
              />
            </Link>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
