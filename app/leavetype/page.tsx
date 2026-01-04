"use client"

import LeaveHolidayList from "@/components/LeaveHolidayList";
import prisma from "@/lib/prisma";
import Button from "@/components/Button";
import TableHeader from "@/components/TableHeader";
import Input from "@/components/Input";
import { useState } from "react";
export default async function Holidays() {
    const [searchValue, setSearchValue] = useState("")

    const holidayList = await prisma.holidays.findMany();

    return (
        <div className="p-8 bg-gray-50 min-h-screen font-sans">
            <div className="max-w-7xl mx-auto">
                {/* 1. Header Section */}
                <div className="flex justify-between items-start mb-6">
                    <div>
                        <h1 className="text-2xl font-bold text-green-900 tracking-tight">Leave Types</h1>
                        <p className="text-gray-500 text-sm mt-1">Manage leave types and their default days.</p>
                    </div>
                    <Button text="add leave" disabled={false} type="button"/>
                </div>

                <Input 
                placeholder="search Holidays"
                type="text"
                value ={searchValue}
                onChangeState={setSearchValue}
                />

                {/* 3. Table Container */}
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                    <TableHeader col1="Name" col2="Date" col3="description"/>
                    <LeaveHolidayList list={holidayList} />
                </div>
            </div>
        </div>
    );
}