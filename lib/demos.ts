export type Item = {
  name: string;
  slug: string;
  description?: string;
};

export const demos: { name: string; items: Item[] }[] = [
  {
    name: 'Layouts',
    items: [
      {
        name: '测试界面',
        slug: 'testing',
        description: '测试界面',
      },
      {
        name: '数据库VFVS',
        slug: 'molecule',
        description: 'pdbqt database searching by features',
      },
      {
        name: 'Bruce算法',
        slug: 'bruce',
        description: 'bruce算法搭建中',
      },
    ],
  },

];
