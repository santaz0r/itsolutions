import { useForm } from 'react-hook-form';
import TextField from './TextField';

const PersonForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log('data2', data);
  });
  return (
    <div className="w-[45%]">
      <h3 className="font-arimo text-lg mb-6 flex justify-center w-full">Другие данные</h3>
      <form onSubmit={onSubmit}>
        <div className="grid grid-cols-2 gap-x-8 gap-y-6 grid-rows-[auto]">
          <TextField label="Имя" field="name" register={register} />
          <TextField label="Почта" field="mail" register={register} />
          <TextField label="Телефон" field="phone" required register={register} error={errors} />
          <TextField label="Город" field="city" register={register} />
          <TextField label="Сообщение" field="message" register={register} textArea className="col-span-2" />

          <div className="col-span-2 flex align-top self-center">
            <input
              type="checkbox"
              {...register('policy', { required: 'You must be agree with privacy policy' })}
              className="min-w-[17px] h-[17px] mr-5 appearance-none  checked:bg-button-color border-[1px] border-[#ccc] rounded-md"
            />
            <label htmlFor="" className="font-bold text-[10px]">
              Я согласен(на), что фирма использует мои личные данные на основе
              <a href="#" target="_blank" rel="noopener noreferrer">
                <span className="hover:text-green-700 text-main-color"> Политики конфедициальности</span>
              </a>
              {errors['policy'] && <p className="text-red-600">{errors['policy']?.message?.toString()}</p>}
            </label>
          </div>

          <button className="hover:bg-green-700 self-center col-span-2 mx-auto w-48 bg-button-color text-white text-xs font-bold rounded-md h-7">
            Отправить
          </button>
        </div>
      </form>
    </div>
  );
};

export default PersonForm;
