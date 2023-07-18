'use client';
import React, { useState, useEffect } from 'react';
import { ExternalLink } from '#/ui/external-link';
import Link from 'next/link';
import { Html } from 'next/document';

// handleSubmit处理submit之后的一系列操作
// 由outputdata以及setoutputdata函数更新输出值
// 输出值由outputdata.map((item) => 输出内容)

export default function Page() {
  const [query, setQuery] = useState('');
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState(1000);
  const [input3, setInput3] = useState(1000);
  const [input4, setInput4] = useState(1000);
  const [input5, setInput5] = useState(1000);
  const [input6, setInput6] = useState(1000);
  const [input7, setInput7] = useState(1000);
  const [input8, setInput8] = useState(1000);
  const [input9, setInput9] = useState(1000);
  const [input10, setInput10] = useState(1000);
  const [input11, setInput11] = useState(1000);
  const [input12, setInput12] = useState(1000);
  const [input13, setInput13] = useState(1000);

  const [url, seturl] = useState('');

  const [outputData, setOutputData] = useState<
    { id: string; title: string }[] | null
  >(null);

  const [Smilesdata, setSmilesdata] = useState<
    { id: string; smiles: string }[] | null
  >(null);

  const [textdata, setText] = useState('');
  const [downloadUrl, setDownloadUrl] = useState('');

  const http = `http://192.168.28.8:4735/api/tutorials/limit/${input1}`;
  const http1 = `http://192.168.28.8:4735/api/tutorials/MW/${input2}/${input3}`;
  const searchhttp = `http://192.168.28.8:4735/api/tutorials/search/${input2}/${input3}/${input4}/${input5}/${input6}/${input7}/${input8}/${input9}/${input10}/${input11}/${input12}/${input13}`;

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    fetch(searchhttp)
      .then((response) => response.json())
      .then((data) => {
        setSmilesdata(data);
        setDownloadUrl(`http://192.168.28.8:4735/api/tutorials/download`);
      });
  };
  return (
    <div className="space-y-6">
      <h1 className="text-xl font-medium text-gray-300">
        搜索漏斗，1000为default值，可以不更改，MW1是最低，MW2是最高
      </h1>

      <form onSubmit={handleSubmit}>
        <div>
          <div id="limit" className="flex flex-wrap justify-between">
            <mark className="bg-black text-white">limit</mark>
            <input
              className="m-1 w-full transform rounded-lg border border-gray-300 bg-black text-white shadow-lg transition duration-200 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              type="text"
              placeholder="limit"
              value={input1}
              onChange={(e) => setInput1(e.target.value)}
            />

            <mark className="bg-black text-white">MW1</mark>

            <input
              className="m-1 w-5/12 transform rounded-lg border border-gray-300 bg-black text-white shadow-lg transition duration-200 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              type="text"
              placeholder="输入2"
              value={input2}
              onChange={(e) => setInput2(e.target.value)}
            />

            <mark className="bg-black text-white">MW2</mark>
            <input
              className="m-1 w-5/12 transform rounded-lg border border-gray-300 bg-black text-white shadow-lg transition duration-200 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              type="text"
              placeholder="输入3"
              value={input3}
              onChange={(e) => setInput3(e.target.value)}
            />

            <mark className="bg-black text-white">HBA11</mark>
            <input
              className="m-1 w-5/12 transform rounded-lg border border-gray-300 bg-black text-white shadow-lg transition duration-200 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              type="text"
              placeholder="输入4"
              value={input4}
              onChange={(e) => setInput4(e.target.value)}
            />

            <mark className="bg-black text-white">HBA12</mark>
            <input
              className="m-1 w-5/12 transform rounded-lg border border-gray-300 bg-black text-white shadow-lg transition duration-200 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              type="text"
              placeholder="输入5"
              value={input5}
              onChange={(e) => setInput5(e.target.value)}
            />

            <mark className="bg-black text-white">HBA21</mark>
            <input
              className="m-1 w-5/12 transform rounded-lg border border-gray-300 bg-black text-white shadow-lg transition duration-200 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              type="text"
              placeholder="输入6"
              value={input6}
              onChange={(e) => setInput6(e.target.value)}
            />
            <mark className="bg-black text-white">HBA22</mark>
            <input
              className="m-1 w-5/12 transform rounded-lg border border-gray-300 bg-black text-white shadow-lg transition duration-200 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              type="text"
              placeholder="输入7"
              value={input7}
              onChange={(e) => setInput7(e.target.value)}
            />
            <mark className="bg-black text-white">SlogP1</mark>
            <input
              className="m-1 w-5/12 transform rounded-lg border border-gray-300 bg-black text-white shadow-lg transition duration-200 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              type="text"
              placeholder="输入8"
              value={input8}
              onChange={(e) => setInput8(e.target.value)}
            />
            <mark className="bg-black text-white">SlogP2</mark>
            <input
              className="m-1 w-5/12 transform rounded-lg border border-gray-300 bg-black text-white shadow-lg transition duration-200 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              type="text"
              placeholder="输入9"
              value={input9}
              onChange={(e) => setInput9(e.target.value)}
            />
            <mark className="bg-black text-white">TPSA1</mark>
            <input
              className="m-1 w-5/12 transform rounded-lg border border-gray-300 bg-black text-white shadow-lg transition duration-200 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              type="text"
              placeholder="输入10"
              value={input10}
              onChange={(e) => setInput10(e.target.value)}
            />
            <mark className="bg-black text-white">TPSA2</mark>
            <input
              className="m-1 w-5/12 transform rounded-lg border border-gray-300 bg-black text-white shadow-lg transition duration-200 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              type="text"
              placeholder="输入11"
              value={input11}
              onChange={(e) => setInput11(e.target.value)}
            />
            <mark className="bg-black text-white">RotB1</mark>
            <input
              className="m-1 w-5/12 transform rounded-lg border border-gray-300 bg-black text-white shadow-lg transition duration-200 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              type="text"
              placeholder="输入12"
              value={input12}
              onChange={(e) => setInput12(e.target.value)}
            />
            <mark className="bg-black text-white">RotB2</mark>
            <input
              className="m-1 w-5/12 transform rounded-lg border border-gray-300 bg-black text-white shadow-lg transition duration-200 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              type="text"
              placeholder="输入13"
              value={input13}
              onChange={(e) => setInput13(e.target.value)}
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

      <output>
        {Smilesdata ? (
          <ul>
            {Smilesdata.map((item) => (
              <li key={item.id}>
                <span>id: {item.id}</span>
                <span>smiles: {item.smiles}</span>
              </li>
            ))}
          </ul>
        ) : (
          <li>Loading...</li>
        )}
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
