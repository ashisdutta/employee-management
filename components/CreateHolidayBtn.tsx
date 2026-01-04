"use client";
import { useState } from "react";
import CreateHoliday from "./CreateHoliday";
import Button from "./Button";

export default function () {
  const [isOpen, setIsopen] = useState(false);
  return (
    <div>
      <Button
        text="+ add Holiday"
        disabled={false}
        type="button"
        onClick={() => setIsopen(true)}
      />
      {isOpen && <CreateHoliday setIsopen={setIsopen} />}
    </div>
  );
}
