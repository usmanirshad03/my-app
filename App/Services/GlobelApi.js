import { create } from "apisauce";



const api  = create({
    baseURL: 'https://newsapi.org/v2/',
    
  })
   
  const apiKey='?country=us&apiKey=671671ba4ae3420995e5bf05c6dadd5c'
  const getTopHeadlines = api.get('top-headlines' +apiKey )
  const getByCategory=(category)=>api.get('/everything?q='+category+"&apiKey=671671ba4ae3420995e5bf05c6dadd5c")
 // https://newsapi.org/v2/top-headlines?country=us&apiKey=671671ba4ae3420995e5bf05c6dadd5c
  //top-headlines?country=us&apiKey=671671ba4ae3420995e5bf05c6dadd5c
  export default{
  
    
     getTopHeadlines,
     getByCategory
  }