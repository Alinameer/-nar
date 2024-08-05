import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
        <h1 className="h1">
           The perfect experiemce in Turkish food <span className="text-blue-600">Çınar</span>
        </h1>
        <p className="mt-4 text-sm max-w-prose text-muted-foreground">
          Welcome to Turkish Delight, where authentic flavors meet tradition.
          Enjoy our exquisite menu of 
        </p>
      </div>
    </MaxWidthWrapper>
  );
}
