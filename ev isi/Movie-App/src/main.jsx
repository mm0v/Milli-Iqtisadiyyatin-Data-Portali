import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import Router from './Router.jsx'
import configureStore from './tools/store/configureStore.js'
import { movieGetToDatabase_Action } from './tools/actions/movieAction.js'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import './data/style.css'
import supabase from '../utils/supabase.js'

const movieStore = configureStore()


movieStore.subscribe(() => {
  console.log(movieStore.getState());
})

const fetchData = async()=>{
  const {data,error} = await supabase.from('movieapp').select();
  if (error) {
    console.log(error);
  }else{

movieStore.dispatch(movieGetToDatabase_Action(data))

    // data.map(item=>(
    //   movieStore.dispatch(movieAdd_Action({id:item.id,img:item.img,title:item.title,price:item.price}))
    // ))
    // console.log(data);
    
  } 
}

fetchData();



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={movieStore}>
      < Router />
    </Provider>
  </StrictMode>,
)
