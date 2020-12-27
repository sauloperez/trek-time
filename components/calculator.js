import React, { useState } from 'react';

import Input from '../components/input'
import { decimalToTime, timings } from '../lib/time'

export default function Calculator() {
  const [total, setTotal] = useState(),
        [distance, setDistance] = useState(),
        [slope, setSlope] = useState(),
        [up_time, setUpTime] = useState(),
        [down_time, setDownTime] = useState();

  function handleDistanceChange(e) {
    e.preventDefault()

    const distance = e.target.value;

    setDistance(distance)

    const times = timings(slope, distance);

    setUpTime(times.up_time)
    setDownTime(times.down_time)
    setTotal(times.total_time)
  }

  function handleSlopeChange(e) {
    e.preventDefault()

    const slope = e.target.value;

    setSlope(slope)

    const times = timings(slope, distance);

    setUpTime(times.up_time)
    setDownTime(times.down_time)
    setTotal(times.total_time)
  }

  return (
    <div className="mt-14 max-w-xs mx-auto">
      <div className="grid gap-10">
        <div className="grid gap-6">
          <Input
            type="number"
            name="slope"
            label="Desnivell"
            placeholder="0"
            unit="metres"
            onChange={handleSlopeChange}
            value={slope}
          />
          <Input
            type="number"
            name="distance"
            label="Distància"
            placeholder="0"
            unit="kilòmetres"
            onChange={handleDistanceChange}
            value={distance}
          />
        </div>

        <div className="flex">
          <div className="mr-6 space-y-1">
            <div>
              <span className="font-medium text-lg text-gray-700">{decimalToTime(up_time)}</span>
              <span className="ml-1 text-gray-400 text-2xl font-mono">&#8599;</span>
            </div>
            <div>
              <span className="font-medium text-lg text-gray-700">{decimalToTime(down_time)}</span>
              <span className="ml-1 text-gray-400 text-2xl font-mono">&#8601;</span>
            </div>
          </div>
          <div>
            <p className="text-gray-400 mt-1">Total</p>
            <div className="text-4xl font-medium text-gray-700">
              {decimalToTime(total)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
