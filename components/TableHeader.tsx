interface HeaderPropsType{
    col1:string
    col2:string
    col3?:string
}


export default function TableHeader({col1, col2, col3}:HeaderPropsType){
    return <div>
            <div className="grid grid-cols-4 bg-[#f8fafc] border-b border-gray-200 px-6 py-3 text-[11px] font-bold text-gray-600 uppercase tracking-widest">
                                <div>{col1}</div>
                                <div>{col2}</div>
                                <div>{col3}</div>
                                <div className="pl-4">actions</div>
                            </div>
    </div>
}

