import axios from 'axios'

const KEY = '6755748551123703'
const DATA_BASE = 'https://superheroapi.com/api/'

export const API = axios
   .get(`${DATA_BASE}/${KEY}`)
   .then(res => {
      console.log(res.data)
   })
   .catch(error => {
      console.log(error)
   })
