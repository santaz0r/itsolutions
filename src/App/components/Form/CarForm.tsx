import { useForm } from 'react-hook-form';
import TextField from './TextField';

const CarForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log('data1', data);
  });

  return (
    <div className="w-[55%] mb-6">
      <h3 className="font-arimo text-lg mb-9 flex justify-center w-[80%]">Данные автомобиля</h3>
      <form onSubmit={onSubmit}>
        <div className="grid grid-cols-4 gap-x-8 gap-y-3 ">
          <TextField label="Марка" field="mark" register={register} />
          <TextField label="Модель" field="model" register={register} />
          <TextField label="Мотор" field="engine" register={register} />
          <TextField label="Год" field="model" register={register} />
          <TextField label="Топливо" field="gas" register={register} />
          <TextField label="КПП" field="transmission" register={register} />
          <TextField label="Пробег" field="mileage" register={register} />
          <TextField label="Техосмотр" field="inspection" register={register} />
          <TextField label="Желаемая цена" field="price" register={register} error={errors} required />
          <button
            type="submit"
            className="hover:bg-green-700 col-span-3 bg-button-color text-white text-xs font-bold rounded-md h-7"
          >
            Добавить фото
          </button>
        </div>
      </form>
    </div>
  );
};

export default CarForm;
