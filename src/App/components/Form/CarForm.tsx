import TextField from './TextField';

const CarForm = () => {
  return (
    <div className="w-[55%] mb-6">
      <h3 className="font-arimo text-lg mb-9 flex justify-center w-[80%]">Данные автомобиля</h3>
      <form action="">
        <div className="grid grid-cols-4 gap-x-8 gap-y-3 ">
          <TextField label="Марка" field="mark" />
          <TextField label="Модель" field="model" />
          <TextField label="Мотор" field="engine" />
          <TextField label="Год" field="model" />
          <TextField label="Топливо" field="gas" />
          <TextField label="КПП" field="transmission" />
          <TextField label="Пробег" field="mileage" />
          <TextField label="Техосмотр" field="inspection" />
          <TextField label="Желаемая цена" field="price" required />
          <button className="hover:bg-green-700 col-span-3 bg-button-color text-white text-xs font-bold rounded-md h-7">
            Добавить фото
          </button>
        </div>
      </form>
    </div>
  );
};

export default CarForm;
