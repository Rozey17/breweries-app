interface BreweryProps {
  name: string;
  city: string;
  state: string;
  street: string;
}
export const Brewery = ({ name, city, state, street }: BreweryProps) => {
  return (
    <div className='px-10 my-4 py-6 rounded shadow-xl bg-white hover:bg-gray-100 mx-auto cursor-pointer'>
      <div className='text-xl font-bold'>{name}</div>
      <br />
      <div className='text-l font-semibold'>{street ? street : ''}</div>
      <br />
      <div>
        {city}, {state}
      </div>
    </div>
  );
};
