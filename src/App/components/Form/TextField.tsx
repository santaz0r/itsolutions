import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

type TProps = {
  label: string;
  field: string;
  type?: string;
  className?: string;
  required?: boolean;
  textArea?: boolean;
  error?: FieldErrors<FieldValues>;
  register: UseFormRegister<FieldValues>;
};

const TextField = ({ label, field, type, className, required, textArea, register, error }: TProps) => {
  return (
    <div className={`relative ${className}`}>
      <label className="absolute px-1 -top-2 left-2 bg-white text-[10px] font-bold" htmlFor={field}>
        {label}
        {required && <div className="w-[3px] h-[3px] bg-button-color absolute top-0 right-0"></div>}
      </label>
      <div>
        {!textArea ? (
          <input
            {...(required
              ? {
                  ...register(field, { required: 'This field is required' }),
                }
              : { ...register(field) })}
            className="border-[1px] text-xs border-[#ccc] rounded-md w-full px-1 h-5"
            type={type}
          />
        ) : (
          <textarea
            maxLength={255}
            {...register(field)}
            className="pt-1 border-[1px] text-xs border-[#ccc] rounded-md w-full px-1 resize-none h-14"
          ></textarea>
        )}
        {error && <div className="text-red-600 text-[10px]">{error[field]?.message?.toString()}</div>}
      </div>
    </div>
  );
};

TextField.defaultProps = {
  type: 'text',
  className: '',
  required: false,
  textArea: false,
};

export default TextField;
