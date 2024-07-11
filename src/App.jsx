// import Menu from "./components/menu";
import SimpleSlider from "./components/slideShow";
// import Logo from './components/assets/images/image.png'
import Header from "./components/header";
import Footer from "./components/footer";

export default function App() {

  return (
    <>
      <Header />
      <div className="bg-gray-50">
        <SimpleSlider />
      </div>
      <Footer />
    </>
  )
}