import axios from 'axios'

const baseUrl = 'http://webservices.nextbus.com/service/publicJSONFeed'

const getAgencyList = async () => {
  try {
    const response = await axios.get(baseUrl+'?command=agencyList')
    return response.data
  } catch (error) {
    throw error.response
  }
}

const getAgencyBuses = async (agencyTag: string) => {
  try {
    const response = await axios.get(baseUrl+'?command=routeList&a='+agencyTag)
    return response.data
  } catch (error) {
    throw error.response
  }
}

export  {
  getAgencyList, 
  getAgencyBuses
}