import prisma from "@/lib/prisma";

interface idType {
    id: string;
}

export default async function BasicInfo({ id }: idType) {
    // Fetch the specific user based on the passed ID
    const user = await prisma.user.findUnique({
        where: { id: id }
    });

    return (
        <div className="bg-white p-8 rounded-lg shadow-sm max-w-4xl border-t-4 border-blue-700">
            {/* Header section matches the blue accent line in the image */}
            <h2 className="text-xl font-bold text-gray-900 mb-8">basic_info</h2>

            {/* Info Grid - 2 columns for the clean split look */}
            <div className="grid grid-cols-2 gap-y-10 gap-x-16">
                
                {/* First Name */}
                <div>
                    <label className="block text-sm text-gray-400 mb-1">first Name</label>
                    <p className="text-gray-900 font-medium">{user?.name || "Ash"}</p>
                </div>

                {/* Gender */}
                <div>
                    <label className="block text-sm text-gray-400 mb-1">Gender</label>
                    <p className="text-gray-900 font-medium">{user?.gender || "male"}</p>
                </div>

                {/* Email */}
                <div>
                    <label className="block text-sm text-gray-400 mb-1">Email</label>
                    <p className="text-gray-900 font-medium">{user?.email || "ash@gmail.com"}</p>
                </div>

                {/* Department */}
                <div>
                    <label className="block text-sm text-gray-400 mb-1">depertment</label>
                    <p className="text-gray-900 font-medium">{user?.userType || "Sales"}</p>
                </div>

                {/* Address */}
                <div>
                    <label className="block text-sm text-gray-400 mb-1">address</label>
                    <p className="text-gray-900 font-medium">{user?.address || "24th street, ghy"}</p>
                </div>

                {/* Phone Number */}
                <div>
                    <label className="block text-sm text-gray-400 mb-1">Phone Number</label>
                    <p className="text-gray-900 font-medium">
                        <span className="mr-1">+91</span>
                        {user?.phoneNo || "6048372334"}
                    </p>
                </div>

            </div>
        </div>
    );
}
