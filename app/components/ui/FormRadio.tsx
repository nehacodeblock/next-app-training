import { InputHTMLAttributes } from "react";

type Option ={
    label:string;
    value:string
}

interface FormRadioProps extends InputHTMLAttributes<HTMLInputElement>
{
    label:string;
    options:Option[];
    error?:string;
    
}

const FormRadio = ({label,options,error,...props}:FormRadioProps)=>{

    return(
        <div className="mb-4">
            <p className="font-medium text-gray-700">{label}</p>
            <div className="flex gap-4"
             >
             {options.map((opt)=>(
                <label className ="flex items-center gap-2" key={opt.value}>{opt.label}
                <input type="radio" value={opt.value} {...props}/>
                </label>
                
             ))}
             {error && <p className="text-red-500">{error}</p>} 
             </div>

        </div>
    )

}

export default FormRadio