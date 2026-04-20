import EditorHeader from "../components/EditorHeader";

export default function EditorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen flex flex-col overflow-hidden bg-background font-body text-on-surface">
      <EditorHeader />
      <div className="flex-1 overflow-hidden flex w-full">
        {children}
      </div>
    </div>
  );
}
