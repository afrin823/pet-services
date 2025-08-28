import { Search } from "lucide-react";
import { cn } from "../../../lib/utils";

export function SearchInput({ className = "" }: { className?: string }) {
  return (
    <div className={cn("w-full ", className)}>
      <div className="bg-white rounded-full pl-6 flex items-center">
        <Search className="h-4 w-4 md:h-5 md:w-5" />
        <input
          type="text"
          placeholder="Search your favorite product .."
          className="p-2  text-black rounded-full focus:outline-none focus:ring-0 focus:border-none"
        />
      </div>
    </div>
  );
}
