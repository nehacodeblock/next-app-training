import { SelectHTMLAttributes } from "react";

type Option ={
    label:string;
    value:string
}

interface FormSelectProps extends SelectHTMLAttributes<HTMLSelectElement>
{
    label:string;
    options:Option[];
    error?:string
}

const FormSelect = ({label,options,error,...props}:FormSelectProps)=>{

    return(
        <div className="flex flex-col gap-1">
            <label className="font-medium text-gray-700">{label}</label>
            <select
                {...props}
                className="w-full px-4 py-2 border rounded-md outline-none focus:border-blue-500 border-gray-300"
             >
             {options.map((opt)=>(
                <option key={opt.value} value={opt.value}>{opt.label}</option>)
             )}
             </select>
             {error && <p className="text-red-500">{error}</p>}

        </div>
    )

}

export default FormSelect