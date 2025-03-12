import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Patinent from "./components/section/Patient";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <div className="flex">
      <Navbar />
      <div className="w-full">
        <Header />
        <Patinent/>
      </div>
    </div>
  );
};

export default Home;
