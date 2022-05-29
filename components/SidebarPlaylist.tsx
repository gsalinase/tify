import NextLink from 'next/link'
import {
  List,
  ListItem,
  LinkBox,
  LinkOverlay,
} from '@chakra-ui/layout'

const SidebarPlaylist = ({ playlists }) => {
  return (
    <List spacing={2}>
      {playlists.map(playlist => (
        <ListItem paddingX="20px" key={playlist}>
          <LinkBox>
            <NextLink href="/">
              <LinkOverlay>
                {playlist}
              </LinkOverlay>
            </NextLink>
          </LinkBox>
        </ListItem>
      ))}
    </List>
  )
} 

export default SidebarPlaylist