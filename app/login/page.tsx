'use client';
import FormInput from '../components/ui/FormInput';
import { FormProvider, useForm } from 'react-hook-form';
import FormSelect from '../components/ui/FormSelect';
import FormRadio from '../components/ui/FormRadio';
import { loginSchema, LoginSchemaType } from '../schemas/loginSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

const LoginPage = () => {
  const methods = useForm<LoginSchemaType>({ resolver: yupResolver(loginSchema) });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const router = useRouter();

  const onSubmitData = async (data: LoginSchemaType) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log('form submitted', data);
    toast.success('login successfully');
    router.push('/dashboard');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmitData)}
          className="bg-white p-6 rounded-lg w-full max-w-sm  space-y-4"
        >
          <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormInput
              label="Name"
              inputSize="md"
              placeholder="enter your name"
              name="name"
            ></FormInput>
            <FormInput
              label="Email"
              inputSize="md"
              type="email"
              placeholder="enter email"
              name="email"
            ></FormInput>
          </div>

          <FormInput label="Password" type="password" name="password"></FormInput>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormSelect
              label="Country"
              name="country"
              options={[
                { label: 'Select Country', value: '' },
                { label: 'India', value: 'India' },
                { label: 'Canada', value: 'Canada' },
              ]}
            ></FormSelect>

            <FormSelect
              label="City"
              name="city"
              options={[
                { label: 'Select City', value: '' },
                { label: 'UP', value: 'UP' },
                { label: 'Delhi', value: 'Delhi' },
              ]}
            ></FormSelect>
          </div>

          <FormRadio
            label="Gender"
            name="gender"
            options={[
              { label: 'Male', value: 'male' },
              { label: 'Female', value: 'female' },
            ]}
          ></FormRadio>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`py-2 mt-4 w-full bg-blue-600 text-white rounded-md hover:bg-blue-700 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </FormProvider>
    </div>
  );
};

export default LoginPage;
