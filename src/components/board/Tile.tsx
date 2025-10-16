interface TileProps {
  value: number;
}

export const Tile = ({ value }: TileProps) => {
  const valueBackgroundColor: Record<number, string> = {
    2: "text-gray-800",
    4: "text-gray-800 bg-yellow-200",
    8: "text-white bg-orange-300",
    16: "text-white bg-orange-400",
    32: "text-white bg-orange-500",
    64: "text-white bg-orange-700",
    128: "text-white bg-yellow-400",
    256: "text-white bg-yellow-500",
    512: "text-white bg-yellow-600",
    1024: "text-white bg-yellow-700",
    2048: "text-white bg-green-400",
  };
  return (
    <div
      className={`
        flex items-center justify-center
        rounded-sm font-bold text-4xl
        bg-gray-100
       w-full aspect-square
       ${valueBackgroundColor[value]}
       `}
    >
      {value || ""}
    </div>
  );
};
