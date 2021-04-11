import axios from 'axios';
import { useState } from 'react';

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
    <div>
      {responseData.length >= 1 &&
        responseData.map((brewery, idx) => {
          return (
            <p key={idx}>
              {brewery.name} - {brewery.city}, {brewery.state}
            </p>
          );
        })}
    </div>
  );
}
