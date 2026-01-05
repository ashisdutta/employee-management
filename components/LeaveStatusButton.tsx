"use client"
import { useRouter } from "next/navigation";
import { useState } from "react"
export default function LeaveStatus({id, status}:{id:string, status:string}){
    const [loading, setLoading] = useState(false)
    const router = useRouter();

    const handleApprove = async () =>{
        const isConfirmed = confirm("Are you sure you want to approve this leave?")
        if(!isConfirmed) return;

        setLoading(true);

        try {
            const res = await fetch(`/api/leave/${id}`,{
            method:"PATCH"
            });
            if(res.ok){
                router.refresh();
            } else {
                const errorData = await res.json();
                alert(`Error: ${errorData.error || "Failed to delete"}`)
            }
        } catch (error) {
            console.error("An unexpected error occurred:", error);
            alert("An unexpected error occurred.");
        }

        setLoading(false)
    }

    if (status.toLowerCase() !== "pending") {
        return <span className="text-emerald-600 font-bold uppercase text-xs">{status}</span>;
    }

    return <div>
        <button
        onClick={handleApprove}
        disabled={loading}
        >
            {loading? "updating...": "pending"}
        </button>
    </div>
}