'use client';
import React, { useState, useEffect } from 'react';
import { ExternalLink } from '#/ui/external-link';
import Link from 'next/link';

// handleSubmit处理submit之后的一系列操作
// 由outputdata以及setoutputdata函数更新输出值
// 输出值由outputdata.map((item) => 输出内容)

export default function Page() {
  const [query, setQuery] = useState('');
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [input4, setInput4] = useState('');
  const [input5, setInput5] = useState('');
  const [input6, setInput6] = useState('');
  // const [outputData, setOutputData] = useState<
  //   { id: string; fileName: string; pdbqtText: string }[] | null
  // >(null);
  const [outputData, setOutputData] = useState('');
  const [downloadUrl, setDownloadUrl] = useState('');

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault(); // 阻止表单默认的提交行为，因为我们要在这里自己处理提交

    // fetch(`http://localhost:3001/search?q=${query}`)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setOutputData(data);
    //     setDownloadUrl(data[0].downloadUrl);
    //   });
    setOutputData(input1 + ',' + input2 + ',' + input3 + ',' + input4);
    setDownloadUrl('test.txt.downloadUrl');
  };

  return (
    <div className="space-y-6">
      <h1 className="text-xl font-medium text-gray-300">输入对应</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <div className="flex flex-wrap justify-between">
            <input
              className="m-2 w-5/12 transform rounded-lg border border-gray-300 bg-black text-white shadow-lg transition duration-200 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              type="text"
              placeholder="输入1"
              value={input1}
              onChange={(e) => setInput1(e.target.value)}
            />
            <input
              className="m-2 w-5/12 transform rounded-lg border border-gray-300 bg-black text-white shadow-lg transition duration-200 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              type="text"
              placeholder="输入2"
              value={input2}
              onChange={(e) => setInput2(e.target.value)}
            />
            <input
              className="m-2 w-5/12 transform rounded-lg border border-gray-300 bg-black text-white shadow-lg transition duration-200 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              type="text"
              placeholder="输入3"
              value={input3}
              onChange={(e) => setInput3(e.target.value)}
            />
            <input
              className="m-2 w-5/12 transform rounded-lg border border-gray-300 bg-black text-white shadow-lg transition duration-200 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              type="text"
              placeholder="输入4"
              value={input4}
              onChange={(e) => setInput4(e.target.value)}
            />
          </div>
        </div>

        <button
          type="submit"
          className="m-2 transform rounded-lg rounded-md border border-gray-300  bg-green-400 p-2 text-white shadow-lg shadow-md transition duration-200 ease-in-out hover:scale-110 focus:outline-none focus:ring-2 focus:ring-indigo-600"
        >
          提交
        </button>
      </form>

      {/* <output>
        {outputData ? (
          outputData.map((item) => (
            <div key={item.id}>
              <li>
                {item.id} {item.fileName}
              </li>
              <li>{item.pdbqtText}</li>
            </div>
          ))
        ) : (
          <li>Loading...</li>
        )}
      </output> */}
      <output>
        {outputData ? <li>{outputData}</li> : <li>Loading...</li>}
      </output>

      <div className="flex gap-2">
        <ExternalLink href="http://www.momed.com.cn/">晨伫官网</ExternalLink>
        <ExternalLink href="https://github.com/chriswang2020com">
          我的github
        </ExternalLink>
        <ExternalLink href={downloadUrl}>下载链接</ExternalLink>
      </div>
    </div>
  );
}
