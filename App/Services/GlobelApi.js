import { create } from "apisauce";



const api  = create({
    baseURL: 'https://newsapi.org/v2/',
    
  })
   
  const apiKey='?country=us&apiKey=671671ba4ae3420995e5bf05c6dadd5c'
  const getTopHeadlines = api.get('top-headlines' +apiKey )
  //top-headlines?country=us&apiKey=671671ba4ae3420995e5bf05c6dadd5c
  export default{
    getTopHeadlines
  }