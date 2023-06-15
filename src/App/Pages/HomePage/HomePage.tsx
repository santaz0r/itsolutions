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
      <section>
        <div>
          <img className="w-[69px]" src="src/assets/logo.svg" alt="logo" />
        </div>
      </section>
    </>
  );
};

export default HomePage;
