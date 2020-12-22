import React, { useState } from 'react';

import Input from '../components/input'
import { decimalToTime, totalTime } from '../lib/time'

export default function Calculator() {
  const [total, setTotal] = useState();
  const [distance, setDistance] = useState();
  const [slope, setSlope] = useState();

  function handleDistanceChange(e) {
    e.preventDefault()

    const distance = e.target.value;

    setDistance(distance)
    setTotal(totalTime(slope, distance))
  }

  function handleSlopeChange(e) {
    e.preventDefault()

    const slope = e.target.value;

    setSlope(slope)
    setTotal(totalTime(slope, distance))
  }

  return (
    <div className="mt-14 max-w-xs mx-auto">
      <div className="grid gap-6">
        <Input
          type="number"
          name="slope"
          label="Desnivell"
          placeholder="600"
          unit="metres"
          onChange={handleSlopeChange}
          value={slope}
        />
        <Input
          type="number"
          name="distance"
          label="Distància"
          placeholder="10"
          unit="kilòmetres"
          onChange={handleDistanceChange}
          value={distance}
        />

        <div>
          <p className="text-gray-400">Temps total</p>
          <div className="text-4xl font-medium text-gray-700">
            {total == null ? "..." : decimalToTime(total)}
          </div>
        </div>
      </div>
    </div>
  )
}
