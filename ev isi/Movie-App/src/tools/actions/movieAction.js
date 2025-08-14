import supabase from "../../../utils/supabase";



export const movieGetToDatabase_Action = (movie) => ({
  type: "GET_MOVIE",
  movie
})

export const movieAddToDatabase_Action = async (movies) => {

  const { data, error } = await supabase.from('movieapp').insert(movies);
  if (error) {
    console.log(error)
  } else {
    console.log(data)
    window.location.assign('/dashboard')
  }

}

export const movieEditToDatabase_Action = async (id, update) => {
  const { error, data } = await supabase.from('movieapp').update(update).eq("id", id)
  if(error){
    console.log(error)
  }else{
    console.log(data)
    window.location.assign(' /dashboard')
  }


}

export const movieDelToDatabase_Action = async (id) => {
  const { error, data } = await supabase.from('movieapp').delete().eq("id", id)
  if (error) {
    console.log(error);
  } else {
      console.log(data);
      window.location.assign('/dashboard');
  }
}

