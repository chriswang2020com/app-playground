'use client';
import React, { useState,useEffect } from 'react';
import { ExternalLink } from '#/ui/external-link';
import Link from 'next/link';



// handleSubmit处理submit之后的一系列操作
// 由outputdata以及setoutputdata函数更新输出值
// 输出值由outputdata.map((item) => 输出内容)



export default function Page() {
  const [query, setQuery] = useState("");
  const [outputData, setOutputData] = useState<{id: string; fileName: string, pdbqtText: string}[] | null> (null);
  const [downloadUrl, setDownloadUrl] = useState("");

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault(); // 阻止表单默认的提交行为，因为我们要在这里自己处理提交

    fetch(`http://localhost:3001/search?q=${query}`)
      .then((response) => response.json())
      .then((data) => {
            setOutputData(data);
            setDownloadUrl(data[0].downloadUrl);
      }
      );
  }


  return (
    <div className="space-y-6">
      <h1 className="text-xl font-medium text-gray-300">搜索功能</h1>


      <form onSubmit={handleSubmit}>
        <div>
          <input
            aria-label="Search"
            type="search"
            name="search"
            id="search"
            className="block w-full rounded-full border-none bg-gray-600 pl-10 font-medium text-gray-200 focus:border-vercel-pink focus:ring-2 focus:ring-vercel-pink"
            autoComplete="off"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div><button type="submit" className="rounded-lg bg-gray-700 px-3 py-1 text-sm font-medium tabular-nums text-gray-100 hover:bg-gray-500 hover:text-white">
          提交
        </button></div>
       
      </form>


      <output>
        {outputData ? (
          outputData.map((item) => 
          <div key={item.id}>
            <li > 
              {item.id} {item.fileName} 
            </li>
            <li>
              {item.pdbqtText}
            </li>
          </div>
          
          )
          
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
        <ExternalLink href={downloadUrl}>
          下载链接
        </ExternalLink>

        
      </div>

    </div>
  );
}
