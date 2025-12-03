import {InputHTMLAttributes } from "react";

type inputSizes = "sm"|"md"|"lg";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement>{
    label:string;
    error?:string;
    inputSize?:inputSizes
}

const FormInput = ({label,error,inputSize ="md",...props}:FormInputProps)=>{

    const sizeClasses = {
        sm:"px-2 py-1 text-sm",
        md:"px-3 py-2 text-base",
        lg:"px-4 py-3 text-lg"
    }
    return(
        <div>
            <label className="block mb-1 font-medium text-gray-700">{label}</label>
            <input
                {...props}
                className={`w-full border rounded-md outline-none focus:border-blue-500 border-gray-300 ${sizeClasses[inputSize]}`}
                />
            {error && <p className="text-red-500">{error}</p>}    
        </div>
        
    )
}
export default FormInput;
