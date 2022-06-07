import { useContext } from 'react';
import { SidebarContext } from '../../components/Sidebar';

const useSidebar = () => useContext(SidebarContext);

export default useSidebar;