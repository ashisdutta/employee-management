import LeaveHolidayList from "@/components/LeaveHolidayList";
import prisma from "@/lib/prisma";
import Button from "@/components/Button";
import CreateHolidayBtn from "@/components/CreateHolidayBtn";
export default async function Holidays() {
  const holidayList = await prisma.holidays.findMany();

  return (
    <div className="p-8 bg-gray-50 min-h-screen font-sans">
      <div className="max-w-7xl mx-auto">
        {/* 1. Header Section */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-2xl font-bold text-green-900 tracking-tight">
              holidays
            </h1>
            <p className="text-gray-500 text-sm mt-1">
              Manage holidays for your organization.
            </p>
          </div>
          <CreateHolidayBtn />
        </div>

        {/* 2. Search Section */}
        <div className="mb-6">
          <div className="relative max-w-sm">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search holidays"
              className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg text-sm bg-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
            />
          </div>
        </div>

        {/* 3. Table Container */}
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
          {/* Table Header - Note: Changed to grid-cols-4 to match your component columns */}
          <div className="grid grid-cols-4 bg-[#f8fafc] border-b border-gray-200 px-6 py-3 text-[11px] font-bold text-gray-600 uppercase tracking-widest">
            <div>holiday</div>
            <div>date</div>
            <div>description</div>
            <div className="pl-4">actions</div>
          </div>

          {/* Data Rows */}
          <LeaveHolidayList list={holidayList} />
        </div>
      </div>
    </div>
  );
}
