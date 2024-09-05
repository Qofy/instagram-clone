import '../styles/left-sidebar.css';
import { House, Search, Compass,Tv, Send, Heart, BadgePlus, User, AtSign,Menu } from 'lucide-react';

const nav = [
  {
    id: 0,
    name: 'Home',
    icon: <House />,
  },
  {
    id: 1,
    name: 'Search',
    icon: <Search />,
  },
  {
    id: 2,
    name: 'Explore',
    icon: <Compass />,
  },
  {
    id: 3,
    name: 'Reels',
    icon: <Tv />,
  },
  {
    id: 4,
    name: 'Messages',
    icon: <Send />,
  },
  {
    id: 5,
    name: 'Notifications',
    icon: <Heart />,
  },
  {
    id: 6,
    name: 'Create',
    icon: <BadgePlus />,
  },
  {
    id: 7,
    name: 'Profile',
    icon: <User />,
  },
];

function LeftSidebar() {
    const navItems = nav.map((item, index) => (
        <div className="nav-item" key={index}>
          <div className="nav-icon">{item.icon}</div>
          <div className="nav-name">{item.name}</div>
        </div>
      ));
  return (
    <div className="left-sidebar">
        <div className='insta-logo'>Instagram</div>
        <div className='nav-items'>{navItems}</div>
        
        <div className='sub-contents'>
            <div className='nav-item'>
        <AtSign/>
        <div>Thread</div>
        </div>

        <div className='nav-item'>
            <Menu/>
            <div>More</div>
        </div>
        </div>

      
    </div>
  );
}

export default LeftSidebar;