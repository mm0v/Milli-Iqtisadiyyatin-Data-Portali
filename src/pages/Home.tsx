import Navbar from "@/layout/Navbar";
import "../assets/sass/home.scss"

const Home = () => {
  return (
    <div className="homePage">
      {/* Video Background */}
      <div className="video-background">
        <video autoPlay loop muted>
          <source src="./header/bg-video-header.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content overlay - perfectly centered */}
      <div className="mainWord">
        <h1 className="font-bold texth1">Milli iqtisadiyyatın <br /> Data portalı</h1>
        <h6 className="texth6 mt-2">Data dünyasına səyahət edin</h6>
      </div>
      <div className="absolute bottom-0">
        <Navbar />
      </div>


      {/* Accessibility and Chatbot icons */}
      <div className="absolute bottom-5 right-5 flex flex-col gap-4">
        <img
          src="./header/accessibility.svg"
          alt="Accessibility Icon"
          className="w-16 h-16 cursor-pointer mb-5"
        />
        <img
          src="./header/chatbot.svg"
          alt="Chatbot Icon"
          className="w-16 h-16 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Home;