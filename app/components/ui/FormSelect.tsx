import { SelectHTMLAttributes } from 'react';
import { FormError } from './FormError';
import { useFormContext } from 'react-hook-form';

type Option = {
  label: string;
  value: string;
};

interface FormSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: Option[];
  name: string;
}

const FormSelect = ({ label, options, name, ...props }: FormSelectProps) => {
  const { register } = useFormContext();

  return (
    <div className="flex flex-col gap-1">
      <label className="font-medium text-gray-700">{label}</label>
      <select
        {...props}
        {...register(name)}
        className="w-full px-4 py-2 border rounded-md outline-none focus:border-blue-500 border-gray-300"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      <FormError name={name} />
    </div>
  );
};

export default FormSelect;
