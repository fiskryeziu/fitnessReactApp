import axios from 'axios'
export const options = {
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
    'X-RapidAPI-Host': process.env.REACT_APP_API_HOST,
  },
}
export const fetchData = async (url, option) => {
  const response = await axios.get(url, option)

  return response.data
}
