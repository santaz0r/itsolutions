const HomePage = () => {
  return (
    <div>
      <h3 className="font-arimo text-lg">Данные Автомобиля</h3>
      <form action="">
        <div className="grid grid-cols-4 gap-8">
          <div>
            <label htmlFor="mark">Марка</label>
            <div>
              <input className="border-gray-500" type="text" />
            </div>
          </div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div className="h-6">1</div>
          <button className="col-span-3 bg-gray-200 h-7">1</button>
        </div>
      </form>
    </div>
  );
};

export default HomePage;
