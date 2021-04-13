import axios from 'axios';
import { useState } from 'react';
import { Brewery } from '../components/brewery';
import { Layout } from '../components/layout';
import Map from '../components/map';

export default function IndexPage() {
  const [responseData, setResponseData] = useState([]);
  axios
    .get('https://api.openbrewerydb.org/breweries')
    .then(function (response) {
      console.log(response.data);
      setResponseData(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });

  return (
    <Layout>
      <div className='flex'>
        <div className='w-1/2 p-4'>
          {responseData.length >= 1 &&
            responseData.map((brewery, idx) => {
              return (
                <Brewery
                  name={brewery.name}
                  city={brewery.city}
                  state={brewery.state}
                  street={brewery.street}
                />
              );
            })}
        </div>
        <div className='w-1/2 p-4'>
          <Map />
        </div>
      </div>
    </Layout>
  );
}
