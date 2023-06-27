import { TabGroup } from '#/ui/tab-group';
import React from 'react';

export const metadata = {
  title: 'Streaming',
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-9">
      <div className="flex justify-between">
        <TabGroup
          path="/molecule"
          items={[
            {
              text: 'Home',
            },
          ]}
        />
      </div>

      <div>{children}</div>
    </div>
  );
}
