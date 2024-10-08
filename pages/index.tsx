import PopoverMenu from "@/components/PopoverMenu";

export default function Home() {
  return (
    <main className="min-h-screen p-60 space-x-40">
      <PopoverMenu
        label="Current"
        items={[
          {
            label: "A",
            groupId: "default",
            id: "a" as const,
            onClick: () => console.log("You clicked A"),
          },
          {
            label: "B",
            groupId: "default",
            id: "b" as const,
            onClick: () => console.log("You clicked B"),
          },
        ]}
      />

      {/* Do not modify this file. Modify @/components/PopoverMenu/index.tsx to
          make the following work. When `onItemClick` is provided, it should
          allow `onClick` to be optional. However if `onItemClick` is not
          provided, Typescript should enforce `onClick` in each item. */}
      <PopoverMenu
        label="Goal"
        items={[
          {
            label: "A",
            groupId: "default",
            id: "a" as const,
            onClick: () => console.log("You clicked A"),
            color: "blue",
          },
          {
            label: "B",
            groupId: "default",
            id: "b" as const,
            color: "red",
          },
        ]}
        onItemClick={(item) => console.log("Fallback, you clicked: ", item.id)}
      />
    </main>
  );
}
