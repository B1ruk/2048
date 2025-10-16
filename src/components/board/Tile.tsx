interface TileProps {
  value: number;
}

export const Tile = ({ value }: TileProps) => {
  return (
    <div
      className={`
        flex items-center justify-center
        rounded-sm font-bold text-xl
        bg-gray-100
       w-full aspect-square
       `}
    >
      {value || ""}
    </div>
  );
};
