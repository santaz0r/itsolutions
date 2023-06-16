import Advantages from '../../components/Advantages/Advantages';
import CardsList from '../../components/CardsList/CardsList';
import CarForm from '../../components/Form/CarForm';
import PersonForm from '../../components/Form/PersonForm';

const HomePage = () => {
  return (
    <>
      <section className="relative pl-28">
        <CarForm />
        <PersonForm />
        <img className="absolute right-0 top-20" src="src/assets/city21.png" alt="city" />
      </section>
      <section className="pr-20 relative pl-28 pt-9">
        <div className="flex flex-col justify-end items-end">
          <div className="w-[65%] flex flex-col justify-end items-center">
            <img className="w-[69px]" src="src/assets/logo.svg" alt="logo" />
            <h4 className="text-xs font-bold text-center mb-5">
              Желаешь продать машину быстро, но не хочешь заниматься этим самостоятельно? Доверь нам все проблемы,
              связанные с продажей машины!
            </h4>
            <CardsList />
          </div>
        </div>
        <img className="absolute top-9 -left-7 -z-10" src="/src/assets/working.png" alt="works" />
      </section>
      <section className="pt-24 relative pl-[4.69rem]">
        <div className="w-[55%]">
          <h3 className="mb-6 font-arimo inline-block font-bold text-2xl border-b-4 border-main-color">О НАС</h3>
          <h4 className="mb-5 font-arimo inline-block font-bold text-lg">
            Мы действуем на рынке автомобилей уже много лет и знаем как оформить сделку быстро и без проблем.
          </h4>
          <p className="mb-5 font-arimo inline-block text-xs w-[77%]">
            Первое, что следует сделать заинтересованному в продаже машины человеку – связаться с нами, заполнив
            контактную форму на сайте или позвонив по телефону. На основании полученного со слов описания машины мы
            назовем предварительную стоимость. Точное ценовое предложение станет известно после проведения оценки,
            которую выполнит наш специалист, выехав для этого в удобное для клиента место.
          </p>
          <div className=" w-[64%]">
            <Advantages imagePath={'src/assets/crown.svg'} content={'Предлагаем самые высокие цены'} />
            <Advantages imagePath={'src/assets/doc.svg'} content={'Оформляем документы прямо на месте'} />
            <Advantages imagePath={'src/assets/thumb.svg'} content={'Выкупаем машины в любом состоянии'} />
          </div>
        </div>
        <img className="absolute top-52 left-52 -z-10" src="src/assets/conv.png" alt="conv" />
      </section>
    </>
  );
};

export default HomePage;
