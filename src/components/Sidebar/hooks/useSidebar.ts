import { useContext } from 'react';
import { SidebarContext } from '../utils';

const useSidebar = () => useContext(SidebarContext);

export default useSidebar;