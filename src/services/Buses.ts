import axios from 'axios'

const baseUrl = 'http://webservices.nextbus.com/service/publicJSONFeed'

const getAgencyList = async () => {
  try {
      // fetch data from a url endpoint
      const response = await axios.get(baseUrl+'?command=agencyList')
      return response.data
    } catch (error) {
      throw error.response
    }
  }

export  {
  getAgencyList, 
}