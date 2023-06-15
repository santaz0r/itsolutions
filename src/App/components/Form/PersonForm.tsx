import TextField from './TextField';

const PersonForm = () => {
  return (
    <div className="w-[45%]">
      <h3 className="font-arimo text-lg mb-6 flex justify-center w-full">Другие данные</h3>
      <form action="">
        <div className="grid grid-cols-2 gap-x-8 gap-y-6 grid-rows-[auto]">
          <TextField label="Имя" field="name" />
          <TextField label="Почта" field="mail" />
          <TextField label="Телефон" field="phone" required />
          <TextField label="Город" field="city" />
          <TextField label="Сообщение" field="message" textArea className="col-span-2" />

          <div className="col-span-2 flex align-top self-center">
            <input
              type="checkbox"
              className="min-w-[17px] h-[17px] mr-5 appearance-none  checked:bg-button-color border-[1px] border-[#ccc] rounded-md"
            />
            <label htmlFor="" className="font-bold text-[10px]">
              Я согласен(на), что фирма использует мои личные данные на основе
              <a href="#" target="_blank" rel="noopener noreferrer">
                <span className="hover:text-green-700 text-main-color"> Политики конфедициальности</span>
              </a>
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
