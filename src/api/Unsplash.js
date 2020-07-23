import axios from 'axios';


export default axios.create({
  baseURL:'https://api.unsplash.com',
  headers:{
    Authorization: 'Client-ID 0Y-OfA-NcGZJ6ciYLlfImi55IRlWjOC3jx9fs4wORTo',
  }
});