"use client"

import { PropsType } from "./DeleteButton"
import { editData } from "@/app/action"
export default function EditButton({id, type}:PropsType){
    const handleClick = async()=>{
            await editData(id, type)
        }

    return (
        <div>
            <button 
            onClick={()=>{handleClick}}
            className="flex items-center gap-1.5 border border-gray-300 rounded px-3 py-1 text-xs font-medium text-gray-700 hover:bg-gray-50 transition-all shadow-sm active:scale-95">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                            edit
            </button>
        </div>
    )
}