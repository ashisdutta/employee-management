interface List {
    id: string;
    name: string;
    date: Date;
    description: string;
}

export interface LeaveHolidayListProps {
    list: List[];
}

export default function LeaveHolidayList({ list }: LeaveHolidayListProps) {
    return (
        <div className="divide-y divide-gray-100">
            {list.map((obj) => (
                <div 
                    key={obj.id} 
                    className="grid grid-cols-4 px-6 py-4 items-center hover:bg-gray-50/80 transition-colors"
                >
                    {/* 1. Name Column */}
                    <div className="text-sm font-medium text-gray-900 lowercase">
                        {obj.name}
                    </div>

                    {/* 2. Date Column */}
                    <div className="text-sm text-gray-600 font-mono italic">
                        {obj.date instanceof Date 
                            ? obj.date.toISOString().split('T')[0] 
                            : "2025-09-26"}
                    </div>

                    {/* 3. Description Column */}
                    <div className="text-sm text-gray-500 truncate pr-8">
                        {obj.description}
                    </div>

                    {/* 4. Actions Column */}
                    <div className="flex justify-center gap-2">
                        <button className="flex items-center gap-1.5 border border-gray-300 rounded px-3 py-1 text-xs font-medium text-gray-700 hover:bg-gray-50 transition-all shadow-sm active:scale-95">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                            edit
                        </button>
                        <button className="flex items-center gap-1.5 border border-red-100 rounded px-3 py-1 text-xs font-medium text-red-600 hover:bg-red-50 transition-all shadow-sm active:scale-95">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                            delete
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}