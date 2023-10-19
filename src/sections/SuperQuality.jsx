import { shoe8 } from "../assets/images";
import Button from "../components/Button";

const SuperQuality = () => {
  return (
    <section
      id='about-us'
      className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'
    >
      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
          Proveemos la
          <span className='text-coral-red'> Mejor </span>
          <span className='text-coral-red'>Calidad </span> de Zapatillas
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          Asegurando estilo y confort, nuestro calzado meticulosamente elaborado
          está diseñado para elevar tu experiencia, proporcionándote
          calidad, innovación y elegancia.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
          Nuestra dedicación al detalle y la excelencia garantizan su satisfacción.
        </p>
        <div className='mt-11'>
          <Button label='Ver detalles' />
        </div>
      </div>

      <div className='flex-1 flex justify-center items-center'>
        <img
          src={shoe8}
          alt='product detail'
          width={570}
          height={522}
          className='object-contain'
        />
      </div>
    </section>
  );
};

export default SuperQuality;