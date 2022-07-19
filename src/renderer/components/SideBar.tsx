import { FC } from 'react';
import { Link } from 'react-router-dom';
import 'tailwindcss/tailwind.css';

interface PropsSideBarIcons {
  text: string;
  path: string;
  isSelected: boolean;
}

const SideBarIcons: FC<PropsSideBarIcons> = (props) => {
  const { text, path, isSelected } = props;
  return (
    <>
      <Link
        to={path}
        className={`sidebar-icon group ${isSelected && 'sidebar-icon-active'}`}
      >
        {text}
        {/* <span className="sidebar-tooltip group-hover:scale-100">{text}</span> */}
      </Link>
    </>
  );
};

interface PropsSideBar {
  selected: string;
}

const SideBar: FC<PropsSideBar> = (props) => {
  const { selected } = props;
  return (
    <div className="basis-1/12">
      <div className="h-screen w-16 flex flex-col bg-blue-800 text-white shadow-lg">
        <SideBarIcons text="Home" path="/" isSelected={selected === 'home'} />
        <SideBarIcons
          text="Room"
          path="/room"
          isSelected={selected === 'room'}
        />
      </div>
    </div>
  );
};

export default SideBar;
