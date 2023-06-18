import { useState } from 'react';
import Advantages from '../../components/Advantages/Advantages';
import AdvantagesList from '../../components/Advantages/AdvantagesList';
import CardsList from '../../components/CardsList/CardsList';
import CarForm from '../../components/Form/CarForm';
import PersonForm from '../../components/Form/PersonForm';
import PocketAdv from '../../components/PocketAdv/PocketAdv';

const HomePage = () => {
  return (
    <>
      <section className=" mt-16 relative pl-28 min-[320px]:max-lg:px-5 min-[320px]:max-lg:flex min-[320px]:max-lg:flex-col min-[320px]:max-lg:items-center">
        <CarForm />
        <PersonForm />
        <img
          className="min-[320px]:max-lg:relative min-[320px]:max-lg:top-5 min-[320px]:max-lg:-right-[20px] absolute right-0 top-20"
          src="./assets/city21.png"
          alt="city"
        />
      </section>
      <section className="min-[320px]:max-lg:px-0 pr-20 relative pl-28 pt-9">
        <div className="flex flex-col justify-end items-end">
          <div className="min-[320px]:max-lg:w-full w-[65%] flex flex-col justify-end items-center min-[320px]:max-lg:overflow-x-hidden min-[320px]:max-lg:pb-3">
            <img className="w-[69px]" src="./assets/logo.svg" alt="logo" />
            <h4 className="text-xs font-bold text-center mb-5 font-arimo">
              <p>Желаешь продать машину быстро, но не хочешь заниматься этим самостоятельно?</p>
              <p> Доверь нам все проблемы, связанные с продажей машины!</p>
            </h4>
            <CardsList />
          </div>
        </div>
        <img
          className="min-[320px]:max-lg:hidden absolute top-9 -left-7 -z-10"
          src="./assets/working.png"
          alt="works"
        />
      </section>
      <section className="min-[320px]:max-lg:px-5 min-[320px]:max-lg:pt-12 pt-24 relative pl-[4.69rem]">
        <div className="min-[320px]:max-lg:w-full w-[55%]">
          <h3 className="mb-6 font-arimo inline-block font-bold text-2xl border-b-4 border-main-color">О НАС</h3>
          <h4 className="mb-5 font-arimo inline-block font-bold text-lg leading-5">
            Мы действуем на рынке автомобилей уже много лет и знаем как оформить сделку быстро и без проблем.
          </h4>
          <p className="min-[320px]:max-lg:w-full mb-5 font-arimo inline-block text-xs w-[77%]">
            Первое, что следует сделать заинтересованному в продаже машины человеку – связаться с нами, заполнив
            контактную форму на сайте или позвонив по телефону. На основании полученного со слов описания машины мы
            назовем предварительную стоимость. Точное ценовое предложение станет известно после проведения оценки,
            которую выполнит наш специалист, выехав для этого в удобное для клиента место.
          </p>
          <div className="min-[320px]:max-lg:w-full min-[320px]:max-lg:flex min-[320px]:max-lg:justify-between font-arimo font-bold text-base w-[64%]">
            <Advantages
              imagePath={'./assets/crown.svg'}
              content={'Предлагаем самые высокие цены'}
              rightSpacing="mr-3.5  min-[320px]:max-lg:mr-0"
              ySpacing="py-5  min-[320px]:max-lg:py-0"
            />

            <Advantages
              imagePath={'./assets/doc.svg'}
              content={'Оформляем документы прямо на месте'}
              rightSpacing="mr-3.5  min-[320px]:max-lg:mr-0"
              ySpacing="py-5  min-[320px]:max-lg:py-0"
            />

            <Advantages
              imagePath={'./assets/thumb.svg'}
              content={'Выкупаем машины в любом состоянии'}
              rightSpacing="mr-3.5  min-[320px]:max-lg:mr-0"
              ySpacing="py-5  min-[320px]:max-lg:py-0"
            />
          </div>
        </div>
        <img
          className="min-[320px]:max-lg:top-0 min-[320px]:max-lg:relative min-[320px]:max-lg:scale-x-[-1] absolute top-52 right-0 -z-10"
          src="./assets/conv.png"
          alt="conv"
        />
      </section>
      <section className="min-[320px]:max-lg:pt-12 min-[320px]:max-lg:px-5  pt-44 pl-[4.69rem] pr-11">
        <div className="flex justify-between min-[320px]:max-lg:flex-col">
          <div className="min-[320px]:max-lg:w-full w-[48%]">
            <h3 className="font-arimo inline-block font-bold text-2xl">
              <span className="border-b-4 border-main-color">COMPANY</span> NAME
            </h3>
            <div className="leading-4 font-arimo text-[15px] mt-5">
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
            <div className="flex justify-between mt-12 min-[320px]:max-lg:mb-[30px]">
              <PocketAdv content="Быстро" path="./assets/time.svg" />
              <PocketAdv content="Качественно" path="./assets/medal.svg" />
              <PocketAdv content="Надежно" path="./assets/hands.svg" />
            </div>
          </div>
          <div className="min-[320px]:max-lg:w-full w-[43%] font-arimo font-bold text-[15px]">
            <AdvantagesList
              imagePath="./assets/check.svg"
              content="Машину не надо подготавливать к продаже"
              rightSpacing="mr-5"
              ySpacing="py-[11.5px]"
            />
            <AdvantagesList
              imagePath="./assets/check.svg"
              content="Покупаем машины любого года выпуска и в любом состоянии"
              rightSpacing="mr-5"
              ySpacing="py-[11.5px]"
            />
            <AdvantagesList
              imagePath="./assets/check.svg"
              content="Покупаем машины без техосмотра и страховки"
              rightSpacing="mr-5"
              ySpacing="py-[11.5px]"
            />
            <AdvantagesList
              imagePath="./assets/check.svg"
              content="Покупаем машины неработающие и нуждающиеся в ремонте"
              rightSpacing="mr-5"
              ySpacing="py-[11.5px]"
            />
            <AdvantagesList
              imagePath="./assets/check.svg"
              content="Предложим за вашу машину больше остальных"
              rightSpacing="mr-5"
              ySpacing="py-[11.5px]"
            />
            <AdvantagesList
              imagePath="./assets/check.svg"
              content="Сразу же выплачиваем деньги"
              rightSpacing="mr-5"
              ySpacing="py-[11.5px]"
            />
            <AdvantagesList
              imagePath="./assets/check.svg"
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
