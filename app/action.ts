"use server"
import { revalidatePath } from "next/cache"
import axios from "axios";
export async function deleteData(id: string, type: string) {
    if (type === "leave") {
        await axios.delete(`/api/leaveTypes/${id}`);
    } else {
        await axios.delete(`/api/holidays/${id}`); // Make sure this matches your schema (Holiday vs Holidays)
    }
    revalidatePath("/your-page-route"); // This refreshes the UI
}

export async function  editData(id: string, type: string) {
    if(type==="leave") {
        await axios.patch(`/api/leaveTypes/${id}`)
    }
    else {
        await axios.patch(`/api/holidays/${id}`); // Make sure this matches your schema (Holiday vs Holidays)
    }
    revalidatePath("/your-page-route");
}