import { InputHTMLAttributes } from 'react';
import { FormError } from './FormError';
import { useFormContext } from 'react-hook-form';

type Option = {
  label: string;
  value: string;
};

interface FormRadioProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  options: Option[];
  name: string;
}

const FormRadio = ({ label, options, name, ...props }: FormRadioProps) => {
  const { register } = useFormContext();

  return (
    <div className="mb-4">
      <p className="font-medium text-gray-700">{label}</p>
      <div className="flex gap-4">
        {options.map((opt) => (
          <label className="flex items-center gap-2" key={opt.value}>
            {opt.label}
            <input type="radio" value={opt.value} {...register(name)} {...props} />
          </label>
        ))}
        <FormError name={name} />
      </div>
    </div>
  );
};

export default FormRadio;
