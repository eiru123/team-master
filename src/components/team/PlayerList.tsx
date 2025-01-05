import { Accordion } from '../ui/accordion';
import { PLAYER_LIST } from '@/mock/playerList';
import Player from './Player';

export default function PlayerList() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {PLAYER_LIST.map((player) => {
        return <Player key={player.id} player={player} />;
      })}
    </Accordion>
  );
}
