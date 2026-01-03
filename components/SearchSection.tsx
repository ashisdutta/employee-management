"use client"
import { useState } from "react"
import Input from "./Input"
import { LeaveHolidayListProps } from "./LeaveHolidayList"
import LeaveHolidayList from "./LeaveHolidayList"

export default function SearchSection({ list }: LeaveHolidayListProps) {
    const [searchValue, setSearchValue] = useState("");

    const filteredList = list.filter((item) =>
        item.name.toLowerCase().includes(searchValue.toLowerCase()) || 
        item.description.toLowerCase().includes(searchValue.toLowerCase())
    )

    return (
        <div className="space-y-6">
            {/* Search Input Container */}
            <div className="max-w-sm">
                <Input 
                    placeholder="Search holidays..."
                    type="text"
                    value={searchValue}
                    onChangeState={setSearchValue}
                />
            </div>

            {/* Table Frame */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                {/* Table Header Row */}
                <div className="grid grid-cols-4 bg-[#f8fafc] border-b border-gray-200 px-6 py-3 text-[11px] font-bold text-gray-600 uppercase tracking-widest">
                    <div>holiday</div>
                    <div>date</div>
                    <div>description</div>
                    <div className="text-center">actions</div>
                </div>

                {/* List Logic */}
                {filteredList.length === 0 ? (
                    <div className="p-16 text-center">
                        <p className="text-gray-400 text-sm">No holidays found matching "{searchValue}"</p>
                    </div>
                ) : (
                    <LeaveHolidayList list={filteredList} />
                )}
            </div>
        </div>
    );
}