import ListeEtudiant from 'renderer/components/ListeEtudiant';
import SideBar from 'renderer/components/SideBar';
import 'tailwindcss/tailwind.css';

const Home = () => {
  return (
    <div className="flex flex-row">
      <SideBar selected="Home" />
      <ListeEtudiant />
    </div>
  );
};

export default Home;
