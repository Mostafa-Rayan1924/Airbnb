import Image from "next/image";
import SearchBar from "./SearchBar";
import { ModeToggle } from "./ModeToggle";
import { Button, buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="py-2  fixed top-0 left-0 z-20 w-full bg-background/50 backdrop-blur-md border-b border-border">
      <div className="container flex items-center gap-2 justify-between">
        <Link href={"/"}>
          <Image
            className="sm:h-[75px] size-[60px] sm:w-[80px]"
            src={"/logo.png"}
            alt="logo"
            width={180}
            height={60}
          />
        </Link>
        <SearchBar />
        <div className="flex items-center gap-2">
          <ModeToggle />
          <Button className={cn(buttonVariants({ size: "sm" }))}>Arabic</Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
