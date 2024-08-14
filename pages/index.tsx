import PopoverMenu from '@/components/PopoverMenu';

export default function Home() {
  return (
    <main className="min-h-screen p-60">
      <PopoverMenu
        // @ts-ignore - string is ok
        label="Menu"
        items={[
          {
            label: 'A',
            groupId: 'default',
            id: 'a',
            onClick: () => console.log('A')
          },
          {
            label: 'B',
            groupId: 'default',
            id: 'b',
            onClick: () => console.log('B')
          }
        ]}
      />
    </main>
  );
}
