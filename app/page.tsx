import { TextAnimate } from "@/components/magicui/text-animate";
import { PulsatingButton } from "@/components/magicui/pulsating-button";
import { VideoText } from "@/components/magicui/video-text";
import { RetroGrid } from "@/components/magicui/retro-grid";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

export default function Home() {
  return (
    <div>
      <div className="relative h-[1000px] w-full overflow-hidden">
        <RetroGrid />
        <TextAnimate
          as="h1"
          className="mx-auto flex max-w-sm items-center rounded-xl font-bold text-5xl"
        >
          Choose Your Fate
        </TextAnimate>
        <div className="relative h-[200px] w-full overflow-hidden">
          <VideoText src="https://cdn.magicui.design/ocean-small.webm">
            MATRIX
          </VideoText>
        </div>
        <VelocityScroll>
          You take the blue pill... the story ends, you wake up in your bed and
          believe whatever you want to believe. You take the red pill... you
          stay in Wonderland, and I show you how deep the rabbit hole goes.
        </VelocityScroll>
        <div className="flex justify-center gap-4 mt-6">
          <PulsatingButton className="text-center font-bold text-2xl bg-red-500">
            Red Pill
          </PulsatingButton>
          <PulsatingButton className="text-center font-bold text-2xl bg-blue-500">
            Blue Pill
          </PulsatingButton>
        </div>
      </div>
    </div>
  );
}
