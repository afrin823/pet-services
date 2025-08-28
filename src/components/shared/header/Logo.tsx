import { Button } from "@/components/ui/button";
import { Cat } from "lucide-react";

export function Logo() {
  return (
    <Button className="flex items-center">
      <Cat className="text-secondary" />
      <span className="text-secondary text-lg md:text-xl font-bold">Pet Services</span>
    </Button>
  )
}
