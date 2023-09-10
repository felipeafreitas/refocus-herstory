import { Slider } from "@/components/ui/slider";
import { Toggle } from "@/components/ui/toggle";
import { initialYear, lastYear } from "@/constants";

type FilterProps = {
  instruments: string[];
  slider: number[];
  setSlider: React.Dispatch<React.SetStateAction<number[]>>
  setSelectedInstruments: React.Dispatch<React.SetStateAction<string[]>>
}

export function Filter({ instruments, slider, setSlider, setSelectedInstruments }: FilterProps) {

  return (
    <div className='flex flex-col gap-6 w-10/12 items-center mt-6'>
        <Slider
          defaultValue={slider}
          onValueChange={(v) => setSlider(v)}
          min={initialYear}
          max={lastYear}
          thumbOne={slider[0]}
          thumbTwo={slider[1]}
        />
        <div className='flex gap-2 flex-wrap'>
          {instruments.length > 0 && instruments.map((instrument) => (
            <Toggle defaultPressed={true} key={instrument} onClick={
              () => setSelectedInstruments(
                (state) => state.includes(instrument)
                  ? state.filter(i => i !== instrument)
                  : [...state, instrument]
              )
            }>
              {instrument}
            </Toggle>
          ))}
        </div>
      </div>
  )
}
