import { useState } from "react";

function Hire({ rate }) {
  const [hours, setHours] = useState(0);

  const total = hours * rate;

  return (
    <div className="mt-6 flex items-center justify-between rounded-xl bg-[#FAF3E1] p-6">
      <div>
        <p className="text-2xl font-bold">Hire me for {hours} hours</p>
        <p className="text-2xl font-bold">Total: PHP {total}</p>
      </div>
      
      <div className="flex items-center gap-4">
        <button
          className="cursor-pointer rounded-lg bg-[#FA8112] px-4 py-2 text-lg font-bold text-[#222222]"
          onClick={() => setHours(hours + 1)}
        >
          Add Hour
        </button>
        <button
          className="cursor-pointer rounded-lg border-2 border-[#222222] px-4 py-2 text-lg font-bold"
          onClick={() => setHours(0)}
        >
          Clear
        </button>
      </div>
    </div>
  );
}

export default Hire;