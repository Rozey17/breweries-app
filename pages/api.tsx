import axios from 'axios';

export default {
  getData: () =>
    axios({
      method: 'GET',
      url: 'http://www.recipepuppy.com/api/',
      // 'headers': {
      //     'content-type':'application/octet-stream',
      //     'x-rapidapi-host':'example.com',
      //     'x-rapidapi-key': process.env.RAPIDAPI_KEY
      // },
      // 'params': {
      //     'search':'parameter',
      // },
    }),
};
