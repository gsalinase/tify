import SidebarNavMenu from './SidebarNavMenu'
import SidebarNavLogo from './SidebarNavLogo'
import SidebarPlaylist from './SidebarPlaylist'
import {
  Box,
  Divider,
} from '@chakra-ui/layout'
import {
  MdHome,
  MdSearch,
  MdLibraryMusic,
  MdPlaylistAdd,
  MdFavorite,
} from 'react-icons/md'

const navMenu = [
  {
    name: 'Home',
    icon:  MdHome,
    route: '/',
  },
  {
    name: 'Search',
    icon: MdSearch,
    route: '/search',
  },
  {
    name: 'Your Library',
    icon: MdLibraryMusic,
    route: '/library',
  },
]

const musicMenu = [
  {
    name: 'Create Playlist',
    icon: MdPlaylistAdd,
    route: '/',
  },
  {
    name: 'Favorites',
    icon: MdFavorite,
    route: '/favorites',
  },
]

const playlists = new Array(30).fill(1).map((_, i) => `Playlist ${i + 1}`) 

const Sidebar = () => {
  return (
    <Box width="100%" height="calc(100vh - 100px)" bg="black" paddingX="5px" color="gray">
      <Box paddingY="20px" height="100%">
        <SidebarNavLogo src="/logo.svg" />
        <SidebarNavMenu navMenu={navMenu} />
        <Divider color="gray.800" />
        <SidebarNavMenu navMenu={musicMenu} />
        <Divider color="gray.800" />
         
         <Box height="66%" overflowY="auto" paddingY="20px">
            <SidebarPlaylist playlists={playlists} />
         </Box>
      </Box>
    </Box>
  )
}

export default Sidebar