import BasicInfo from "@/components/BasicInfo"

interface PageProps {
    params: Promise<{ id: string }>;
}

export default async function EmployeeDetails({ params }: PageProps){
    const {id} = await params
    console.log(id)
    return <div>
        <BasicInfo id={id}/>
    </div>
}