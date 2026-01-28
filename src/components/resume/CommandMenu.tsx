import * as React from "react";
import { Command } from "cmdk";
import * as Dialog from "@radix-ui/react-dialog";
import { Search, X, Command as CommandIcon, Printer, ExternalLink } from "lucide-react";

interface Props {
  links: { url: string; title: string }[];
}

export function CommandMenu({ links }: Props) {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      {/* Hint bar for desktop */}
      <p className="fixed bottom-0 left-0 right-0 hidden border-t border-t-[hsl(215,27.9%,16.9%)] bg-[hsl(224,71.4%,4.1%)] p-1 text-center text-sm text-[hsl(217.9,10.6%,64.9%)] print:hidden xl:block">
        Press{" "}
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-[hsl(215,27.9%,16.9%)] bg-[hsl(215,27.9%,16.9%)] px-1.5 font-mono text-[10px] font-medium text-[hsl(217.9,10.6%,64.9%)] opacity-100">
          <span className="text-xs">⌘</span>J
        </kbd>{" "}
        to open the command menu
      </p>

      {/* Mobile button */}
      <button
        onClick={() => setOpen((open) => !open)}
        className="fixed bottom-4 right-4 flex size-12 items-center justify-center rounded-full border border-[hsl(215,27.9%,16.9%)] bg-[hsl(224,71.4%,4.1%)] shadow-2xl print:hidden xl:hidden"
        aria-label="Open command menu"
      >
        <CommandIcon className="size-6 text-[hsl(210,20%,98%)]" />
      </button>

      {/* Command Dialog */}
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 print:hidden" />
          <Dialog.Content className="fixed left-[50%] top-[50%] z-50 w-full max-w-lg translate-x-[-50%] translate-y-[-50%] overflow-hidden rounded-lg border border-[hsl(215,27.9%,16.9%)] bg-[hsl(224,71.4%,4.1%)] p-0 shadow-lg print:hidden">
            <Command className="flex h-full w-full flex-col overflow-hidden rounded-md bg-[hsl(224,71.4%,4.1%)] text-[hsl(210,20%,98%)]">
              <div className="flex items-center border-b border-[hsl(215,27.9%,16.9%)] px-3">
                <Search className="mr-2 size-4 shrink-0 text-[hsl(217.9,10.6%,64.9%)]" />
                <Command.Input
                  placeholder="Type a command or search..."
                  className="flex h-12 w-full rounded-md bg-transparent py-3 text-sm text-[hsl(210,20%,98%)] outline-none placeholder:text-[hsl(217.9,10.6%,64.9%)]"
                />
              </div>
              <Command.List className="max-h-[300px] overflow-y-auto overflow-x-hidden p-2">
                <Command.Empty className="py-6 text-center text-sm text-[hsl(217.9,10.6%,64.9%)]">
                  No results found.
                </Command.Empty>
                <Command.Group
                  heading="Actions"
                  className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-[hsl(217.9,10.6%,64.9%)]"
                >
                  <Command.Item
                    onSelect={() => {
                      setOpen(false);
                      window.print();
                    }}
                    className="relative flex cursor-pointer select-none items-center gap-2 rounded-sm px-2 py-2 text-sm outline-none aria-selected:bg-[hsl(215,27.9%,16.9%)] aria-selected:text-[hsl(210,20%,98%)]"
                  >
                    <Printer className="size-4" />
                    <span>Print Resume</span>
                  </Command.Item>
                </Command.Group>
                <Command.Group
                  heading="Links"
                  className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-[hsl(217.9,10.6%,64.9%)]"
                >
                  {links.map(({ url, title }) => (
                    <Command.Item
                      key={url}
                      onSelect={() => {
                        setOpen(false);
                        window.open(url, "_blank");
                      }}
                      className="relative flex cursor-pointer select-none items-center gap-2 rounded-sm px-2 py-2 text-sm outline-none aria-selected:bg-[hsl(215,27.9%,16.9%)] aria-selected:text-[hsl(210,20%,98%)]"
                    >
                      <ExternalLink className="size-4" />
                      <span>{title}</span>
                    </Command.Item>
                  ))}
                </Command.Group>
              </Command.List>
            </Command>
            <Dialog.Close className="absolute right-4 top-4 rounded-sm text-[hsl(217.9,10.6%,64.9%)] opacity-70 transition-opacity hover:opacity-100 focus:outline-none">
              <X className="size-4" />
              <span className="sr-only">Close</span>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}
