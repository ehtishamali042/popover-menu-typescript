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
            id: "a",
            onClick: () => console.log("You clicked A"),
            color: "blue",
          },
          {
            label: "B",
            groupId: "default",
            id: "b",
            onClick: () => console.log("You clicked B"),
            color: "red",
          },
        ]}
      />

      {/* Do not modify this file. Modify @/components/PopoverMenu/index.tsx to
          make the following work. When `onItemClick` is provided, it should
          allow `onClick` to be optional. However if `onItemClick` is not
          provided, Typescript should enforce `onClick` in each item.
          
          Ensure that the item argument holds exactly what the item is, the
          `color` key should be allowed and not underlined. And putting mouse
          over `item.color` in the fallback, Typescript should show that the
          only possibilities for color is "red" or "blue". */}
      <PopoverMenu
        label="Goal"
        items={[
          {
            label: "A",
            groupId: "default",
            id: "a",
            onClick: () => console.log("You clicked A"),
            color: "blue" as const,
          },
          {
            label: "B",
            groupId: "default",
            id: "b",
            color: "red" as const,
          },
        ]}
        onItemClick={(item) =>
          console.log("Fallback, you clicked item with color:", item.color)
        }
      />
    </main>
  );
}
