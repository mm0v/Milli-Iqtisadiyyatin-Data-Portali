import ApiOne from "./components/ApiOne"
import ApiTwo from "./components/ApiTwo"

const App = () => {
  return (
    <div style={{display:"flex" ,height:'100%', backgroundAttachment:"fixed", backgroundImage:"url('https://wallpapers.com/images/hd/winter-night-desktop-9dwzp38g8wnc1b3g.jpg')", backgroundSize:"cover"}}>
      <ApiOne />
      <ApiTwo />
    </div>
  )
}

export default App