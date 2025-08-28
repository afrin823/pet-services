import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export function WhatsAppIcon() {
  return (
    <Button className="flex items-center gap-2 text-secondary">
      <div className="w-6 h-6 md:w-8 md:h-8 bg-green-500 rounded-full flex items-center justify-center">
        <MessageCircle className="w-4 h-4 md:w-5 md:h-5 text-secondary" />
      </div>
      <div className="flex flex-col">
        <span className="text-xs md:text-sm font-medium">WhatsApp</span>
        <span className="text-xs font-bold">Instant Quote</span>
      </div>
    </Button>
  )
}
