import Advantages from '../../components/Advantages/Advantages';
import CardsList from '../../components/CardsList/CardsList';
import CarForm from '../../components/Form/CarForm';
import PersonForm from '../../components/Form/PersonForm';
import PocketAdv from '../../components/PocketAdv/PocketAdv';

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
          <div className=" font-arimo font-bold text-base w-[64%]">
            <Advantages
              imagePath={'src/assets/crown.svg'}
              content={'Предлагаем самые высокие цены'}
              rightSpacing="mr-3.5"
              ySpacing="py-5"
            />

            <Advantages
              imagePath={'src/assets/doc.svg'}
              content={'Оформляем документы прямо на месте'}
              rightSpacing="mr-3.5"
              ySpacing="py-5"
            />

            <Advantages
              imagePath={'src/assets/thumb.svg'}
              content={'Выкупаем машины в любом состоянии'}
              rightSpacing="mr-3.5"
              ySpacing="py-5"
            />
          </div>
        </div>
        <img className="absolute top-52 left-52 -z-10" src="src/assets/conv.png" alt="conv" />
      </section>
      <section className="pt-44 pl-[4.69rem] pr-11">
        <div className="flex justify-between">
          <div className="w-[48%]">
            <h3 className="font-arimo inline-block font-bold text-2xl">
              <span className="border-b-4 border-main-color">COMPANY</span> NAME
            </h3>
            <div className="font-arimo text-[15px] mt-5">
              <p>
                Каждый автовладелец хотя бы раз сталкивался с необходимостью продать машину. Конечно же, вы хотите
                селать это быстрее и с максимальной выгодой. Наши специалисты возьмут на себя все проблемы! Нам можно
                полностью доверять.
              </p>
              <p>
                Мы не являемся кредитной организацией или ломбардом. Мы покупаем ваши машины, в любом виде и состоянии.
                Да, так просто!
              </p>
              <p>Наша цель - купить вашу машину максимально быстро, просто и выгодно для вас.</p>
            </div>
            <div className="flex justify-between mt-12">
              <PocketAdv content="Быстро" path="src/assets/time.svg" />
              <PocketAdv content="Качественно" path="src/assets/medal.svg" />
              <PocketAdv content="Надежно" path="src/assets/hands.svg" />
            </div>
          </div>
          <div className="w-[43%] font-arimo font-bold text-[15px]">
            <Advantages
              imagePath="src/assets/check.svg"
              content="Машину не надо подготавливать к продаже"
              rightSpacing="mr-5"
              ySpacing="py-[11.5px]"
            />
            <Advantages
              imagePath="src/assets/check.svg"
              content="Покупаем машины любого года выпуска и в любом состоянии"
              rightSpacing="mr-5"
              ySpacing="py-[11.5px]"
            />
            <Advantages
              imagePath="src/assets/check.svg"
              content="Покупаем машины без техосмотра и страховки"
              rightSpacing="mr-5"
              ySpacing="py-[11.5px]"
            />
            <Advantages
              imagePath="src/assets/check.svg"
              content="Покупаем машины не работающие и нуждающиеся в ремонте"
              rightSpacing="mr-5"
              ySpacing="py-[11.5px]"
            />
            <Advantages
              imagePath="src/assets/check.svg"
              content="Предложим за вашу машину больше остальных"
              rightSpacing="mr-5"
              ySpacing="py-[11.5px]"
            />
            <Advantages
              imagePath="src/assets/check.svg"
              content="Сразу же выплачиваем деньги"
              rightSpacing="mr-5"
              ySpacing="py-[11.5px]"
            />
            <Advantages
              imagePath="src/assets/check.svg"
              content="Работаем по всей Эстонии и сами выезжаем на место"
              rightSpacing="mr-5"
              ySpacing="py-[11.5px]"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
