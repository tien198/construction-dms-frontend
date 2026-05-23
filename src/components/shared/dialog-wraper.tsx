import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type Props = {
  dialogTitle: () => React.ReactNode;
  dialogDescription?: string;
  triggerElement?: () => React.ReactNode;
  dialogContent?: () => React.ReactNode;
};

export function DialogWrapper({
  dialogTitle,
  dialogDescription,
  triggerElement,
  dialogContent,
}: Props) {
  return (
    <Dialog>
      <DialogOverlay className="bg-black/60" />
      <DialogTrigger>{triggerElement?.()}</DialogTrigger>
      <DialogContent className="px-8 py-14">
        <DialogHeader>
          <DialogTitle>{dialogTitle?.()}</DialogTitle>
          <DialogDescription>{dialogDescription}</DialogDescription>
        </DialogHeader>
        {dialogContent?.()}
      </DialogContent>
    </Dialog>
  );
}
