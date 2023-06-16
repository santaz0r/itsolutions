import CardsList from '../../components/CardsList/CardsList';
import CarForm from '../../components/Form/CarForm';
import PersonForm from '../../components/Form/PersonForm';

const HomePage = () => {
  return (
    <>
      <section className="relative">
        <CarForm />
        <PersonForm />
        <img className="absolute right-0 top-20" src="src/assets/city21.png" alt="city" />
      </section>
      <section className="pr-20 relative">
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
        <img className="absolute top-0 -left-36 -z-10" src="/src/assets/working.png" alt="works" />
      </section>
    </>
  );
};

export default HomePage;
