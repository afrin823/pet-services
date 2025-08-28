import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import MobileLogo from "./MobileLogo"; 
// import { WhatsAppIcon } from "./WhatsAppIcon";
import Route from "./Route";    
import { SearchInput } from "./SearchInput";


const MobileMenu = () => {
    return (
        <div>
            <Sheet>
                <SheetTrigger asChild>
                    <Button ><AlignJustify /></Button>
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle><MobileLogo /></SheetTitle>
                        <SheetDescription>
                            Make changes to your profile here. Click save when you&apos;re done.
                        </SheetDescription>

                        <Route />

                    </SheetHeader>
                    {/* header  */}
                    <div className="grid flex-1 auto-rows-min gap-6 px-4">
                        <div className="grid gap-3">
                            <SearchInput  />
                        </div>
                        {/* <div className="grid gap-3">
                            <WhatsAppIcon />
                        </div> */}
                    </div>
                    <SheetFooter>
                        <Button type="submit">Login</Button>

                        <Button variant="outline">Register</Button>

                    </SheetFooter>
                </SheetContent>
            </Sheet>
        </div>
    );
};

export default MobileMenu;