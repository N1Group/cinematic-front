import { defaultLayoutIcons, DefaultVideoLayout } from '@vidstack/react/player/layouts/default';
import '@vidstack/react/player/styles/default/layouts/video.css';
import '@vidstack/react/player/styles/default/theme.css';
import { $MediaPlayer, $MediaProvider } from './style';

export const Player = () => {
  return (
    <$MediaPlayer volume={0.5} title='Sprite Fight' src='https://www.youtube.com/watch?v=_cMxraX_5RE'>
      <$MediaProvider />
      <DefaultVideoLayout icons={defaultLayoutIcons} />
    </$MediaPlayer>
  );
};
