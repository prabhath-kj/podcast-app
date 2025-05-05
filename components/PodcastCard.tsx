import { Button } from "@heroui/button";
import { Card, CardHeader } from "@heroui/card";
import Image from "next/image";

type Props = {
  id: string;
  image: string;
  title: string;
  channel: string;
  selected: boolean;
  onSelect: () => void;
};

export function PodcastCard({ image, title, channel, selected, onSelect }: Props) {
  return (
    <Card className="w-full shadow-none px-4 py-2 bg-transparent">
      <CardHeader className="flex items-center justify-between gap-3 p-0">
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <Image
            src={image}
            alt={title}
            width={52}
            height={52}
            className="rounded-xl flex-shrink-0 object-cover"
          />
          <div className="min-w-0">
            <p className="text-base font-bold text-black truncate">{title}</p>
            <p className="text-xs text-gray-500 truncate">{channel}</p>
          </div>
        </div>
        <Button
          onClick={onSelect}
          variant={selected ? "solid" : "faded"}
          color={selected ? "primary" : "default"}
          className="text-sm font-semibold rounded-full px-4 py-1.5 shadow-none border-none"
        >
          {selected ? "Selected" : "Subscribe"}
        </Button>
      </CardHeader>
    </Card>

  );
}
