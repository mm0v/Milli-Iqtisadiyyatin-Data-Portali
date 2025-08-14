import { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import './Assets/css/style.css'


const App = () => {
  const [bg, setBg]=useState('season')
  const [email, setEmail] = useState("a");
  const [password, setPass] = useState("b");

  const user = {
    email: "admin@gmail.com",
    password: "admin123"
  }

  
  
  const formSubmit = (e) => {
    e.preventDefault();
    
    if (!email || !password) {
        setBg('fall')
    } else if (user.email === email && user.password === password) {
        setBg('spring')
    } else {
        setBg('winter')
      
    }
  };
  
  return (
    <>
      <section className={bg}>
        <form action='' onSubmit={formSubmit}>
          <h1>Login</h1>
          <div className="email">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='username' onChange={(e) => { setEmail(e.target.value) }}/>
          </div>
          <div className="password">
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder='password' onChange={(e) => { setPass(e.target.value) }} />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </section>

    </>

  )
}

export default App