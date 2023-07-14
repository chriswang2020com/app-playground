'use client';
import { ExternalLink } from '#/ui/external-link';
import Link from 'next/link';

// handleSubmit处理submit之后的一系列操作
// 由outputdata以及setoutputdata函数更新输出值
// 输出值由outputdata.map((item) => 输出内容)

export default function Page() {
  return (
    <div className="space-y-6">
      <h1 className="text-xl font-medium text-gray-300">算法</h1>

      <h1 className="text-xl font-medium text-gray-300">this</h1>

      <div className="flex gap-2">
        <ExternalLink href="http://www.momed.com.cn/">晨伫官网</ExternalLink>
        <ExternalLink href="https://github.com/chriswang2020com">
          我的github
        </ExternalLink>
      </div>
    </div>
  );
}
