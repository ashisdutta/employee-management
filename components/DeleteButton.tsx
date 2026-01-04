"use client"

import prisma from "@/lib/prisma"
import { deleteData } from "@/app/action"
export interface PropsType{
    id:string
    type:string
}

export default async function DeleteButton({id, type}:PropsType){
    const handleClick = async()=>{
        await deleteData(id, type)
    }
    return (
        <div>
            <button 
            onClick={()=>{handleClick}}
            className="flex items-center gap-1.5 border border-red-100 rounded px-3 py-1 text-xs font-medium text-red-600 hover:bg-red-50 transition-all shadow-sm active:scale-95">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                            delete
            </button>
        </div>
    )
}