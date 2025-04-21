export const DiceFace = ({ value }: { value: number }) => {
  switch (value) {
    case 1:
      return <div className="w-2 h-2 bg-black rounded-full" />;
    case 2:
      return (
        <div className="grid grid-cols-2 gap-3 p-1">
          <div className="w-2 h-2 bg-black rounded-full" />
          <div className="w-2 h-2 bg-black rounded-full col-start-2 row-start-2" />
        </div>
      );
    case 3:
      return (
        <div className="grid grid-cols-3 gap-1 p-1">
          <div className="w-2 h-2 bg-black rounded-full" />
          <div className="w-2 h-2 bg-black rounded-full col-start-2 row-start-2" />
          <div className="w-2 h-2 bg-black rounded-full col-start-3 row-start-3" />
        </div>
      );
    case 4:
      return (
        <div className="grid grid-cols-2 gap-3 p-1">
          <div className="w-2 h-2 bg-black rounded-full" />
          <div className="w-2 h-2 bg-black rounded-full" />
          <div className="w-2 h-2 bg-black rounded-full" />
          <div className="w-2 h-2 bg-black rounded-full" />
        </div>
      );
    case 5:
      return (
        <div className="grid grid-cols-3 gap-1 p-1">
          <div className="w-2 h-2 bg-black rounded-full" />
          <div className="w-2 h-2 bg-black rounded-full col-start-3 row-start-1" />
          <div className="w-2 h-2 bg-black rounded-full col-start-2 row-start-2" />
          <div className="w-2 h-2 bg-black rounded-full col-start-1 row-start-3" />
          <div className="w-2 h-2 bg-black rounded-full col-start-3 row-start-3" />
        </div>
      );
    case 6:
      return (
        <div className="grid grid-cols-2 gap-2 p-1">
          <div className="w-2 h-2 bg-black rounded-full" />
          <div className="w-2 h-2 bg-black rounded-full" />
          <div className="w-2 h-2 bg-black rounded-full" />
          <div className="w-2 h-2 bg-black rounded-full" />
          <div className="w-2 h-2 bg-black rounded-full" />
          <div className="w-2 h-2 bg-black rounded-full" />
        </div>
      );
    default:
      return null;
  }
};
