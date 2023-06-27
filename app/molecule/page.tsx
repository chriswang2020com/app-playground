'use client';
import React, { useState,useEffect } from 'react';
import { ExternalLink } from '#/ui/external-link';
import Link from 'next/link';


export default function Page() {
  const [outputData, setOutputData] = useState<{id: number; name: string }[] | null>(null);

  useEffect(() => {
    fetch('http://localhost:3001/search?q=somequery')
      .then((response) => response.json())
      .then((data) => setOutputData(data));
  }, []);


  return (
    <div className="space-y-6">
      <h1 className="text-xl font-medium text-gray-300">搜索功能</h1>
      <div>
      <input
            aria-label="Search"
            type="search"
            name="search"
            id="search"
            className="block w-full rounded-full border-none bg-gray-600 pl-10 font-medium text-gray-200 focus:border-vercel-pink focus:ring-2 focus:ring-vercel-pink"
            autoComplete="off"
          />
        </div>
      <output>
        {outputData ? (
          outputData.map((item) => <li key={item.id}>{item.name}</li>)
        ) : (
          <li>Loading...</li>
        )}

      </output>
      
      <div className="flex gap-2">
        <ExternalLink href="http://www.momed.com.cn/">
          晨伫官网
        </ExternalLink>
        <ExternalLink href="https://github.com/chriswang2020com">
          我的github
        </ExternalLink>
      </div>

    </div>
  );
}
