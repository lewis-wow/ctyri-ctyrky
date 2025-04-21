import { DiceFace } from './DiceFace';

interface DiceProps {
  diceValues: number[];
}

export const Dice = ({ diceValues }: DiceProps) => {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {diceValues.map((value, index) => (
        <div
          key={index}
          className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-black font-bold text-xl shadow-lg"
        >
          <DiceFace value={value} />
        </div>
      ))}
    </div>
  );
};
