'use client';
import React, { useState, useEffect } from 'react';
import { ExternalLink } from '#/ui/external-link';
import Link from 'next/link';
import { Html } from 'next/document';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

export default function Page() {
  const [range, setRange] = useState([0, 100]);

  const handleRangeChange = (value) => {
    setRange(value);
  };

  return (
    <div>
      <Slider
        min={0}
        max={100}
        range
        value={range}
        onChange={handleRangeChange}
      />
      <div>
        区间: {range[0]} - {range[1]}
      </div>
    </div>
  );
}
