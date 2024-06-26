"use client";

import SideMenu from "@/app/_components/side-menu";
import { Button } from "@/app/_components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/app/_components/ui/sheet";
import { Barbershop } from "@prisma/client";
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface BarbershopInfoProps {
  barbershop: Barbershop;
}

const BarbershopInfo = ({ barbershop }: BarbershopInfoProps) => {
  const router = useRouter();
  const handleBackClick = () => {
    router.replace("/");
  };
  return (
    <div>
      <div className="h-[250px] w-full relative  ">
        <Button
          onClick={handleBackClick}
          size="icon"
          variant="outline"
          className=" absolute z-50 top-2 left-4 h-8 w-8"
        >
          <ChevronLeftIcon></ChevronLeftIcon>
        </Button>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="z-50 absolute right-4 mt-2 h-8 w-8 ">
              <MenuIcon size={16} />
            </Button>
          </SheetTrigger>
          <SheetContent className="p-0">
            <SideMenu />
          </SheetContent>
        </Sheet>

        
        <Image
          src={barbershop.imageUrl}
          fill
          alt={barbershop.name}
          style={{
            objectFit: "cover",
          }}
          className="opacity-85"
        />
      </div>

      <div className="px-5 pt-3 pb-6 border-b border-solid border-secondary">
        <h1 className="font-bold text-xl ">{barbershop.name}</h1>
        <div className="flex items-center gap-1 mt-2">
          <MapPinIcon className=" text-primary" size={18} />
          <p className="text-sm">{barbershop.address}</p>
        </div>
        <div className="flex items-center gap-1 mt-2">
          <StarIcon size={18} className="fill-primary text-primary" />
          <p className="text-sm"> 5,0 (899 avaliações) </p>
        </div>
      </div>
    </div>
  );
};

export default BarbershopInfo;
