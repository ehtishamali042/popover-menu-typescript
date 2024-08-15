import PopoverMenu from '@/components/PopoverMenu';

export default function Home() {
  return (
    <main className="min-h-screen p-60 space-x-40">
      <PopoverMenu
        label="Current"
        items={[
          {
            label: 'A',
            groupId: 'default',
            id: 'a' as const,
            onClick: () => console.log('You clicked A')
          },
          {
            label: 'B',
            groupId: 'default',
            id: 'b' as const,
            onClick: () => console.log('You clicked B')
          }
        ]}
      />

      <PopoverMenu
        label="Goal"
        items={[
          {
            label: 'A',
            groupId: 'default',
            id: 'a' as const,
            onClick: () => console.log('You clicked A')
          },
          {
            label: 'B',
            groupId: 'default',
            id: 'b' as const
          }
        ]}
        onItemClick={item => console.log('Fallback, you clicked: ', item.id)}
      />
    </main>
  );
}
