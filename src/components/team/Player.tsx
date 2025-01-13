import { AccordionHeader } from '@radix-ui/react-accordion';
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';

interface PlayerProps {
  player: {
    id: number;
    name: string;
    age: number;
    height: number;
  };
}

export default function Player({ player }: PlayerProps) {
  return (
    <div>
      <AccordionItem value={player.id.toString()}>
        <AccordionHeader>
          <AccordionTrigger>{player.name}</AccordionTrigger>
        </AccordionHeader>
        <AccordionContent>
          <div>나이: {player.age}</div>
          <div>키: {player.height}</div>
        </AccordionContent>
      </AccordionItem>
    </div>
  );
}
