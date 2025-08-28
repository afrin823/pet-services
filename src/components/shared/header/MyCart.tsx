import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"

export function MyCart() {
  return (
    <div className="hidden lg:block">
      <Button className="flex items-center gap-1 md:gap-2 text-secondary">
        <div className="w-6 h-6 md:w-8 md:h-8 bg-secondary/20 rounded-full flex items-center justify-center">
          <ShoppingCart className="w-4 h-4 md:w-5 md:h-5 text-secondary" />
        </div>
        <div className="hidden sm:flex flex-col">
          <span className="text-xs md:text-sm font-medium">My Cart</span>
          <span className="text-xs font-bold">0 AED</span>
        </div>
      </Button>
    </div>

  )
}
