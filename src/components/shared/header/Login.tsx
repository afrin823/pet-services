import { Button } from "@/components/ui/button"
import { User } from "lucide-react"

export function Login() {
  return (
 <div className="hidden lg:block">
     <Button className="flex items-center gap-1 md:gap-2 text-secondary ">
      <div className="w-6 h-6 md:w-8 md:h-8 bg-secondary/20 rounded-full flex items-center justify-center ">
        <User className="w-4 h-4 md:w-5 md:h-5 text-secondary " />
      </div>
      <div className="hidden sm:flex flex-col">
        <span className="text-xs md:text-sm font-medium">Login</span>
        <span className="text-xs font-bold">Register</span>
      </div>
    </Button>
 </div>
  )
}
