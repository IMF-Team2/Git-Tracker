import { Filter, Calendar, ChevronLeft, ChevronRight } from "lucide-react";

export default function Toolbar() {
  return (
    <div className="flex justify-start  sm:justify-end sm:items-center gap-2">
      <button className="border rounded px-2 py-1">
        <Filter className="w-4 h-4 text-gray-600" />
      </button>
      <button className="border rounded flex items-center gap-1 px-2 py-1">
        <Calendar className="w-4 h-4 text-gray-600" />
        <span className="text-gray-600 text-sm">Sort: Chronological</span>
      </button>
      <div className="flex items-center border rounded px-2 py-1 text-gray-600 text-sm">
        <ChevronLeft className="w-4 h-4 mr-1" />
        <span className=" text-center">August, 2021</span>
        <ChevronRight className="w-4 h-4 ml-1" />
      </div>
    </div>
  );
}
