import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { AdministrativeDocument } from "@/types";
import { DecisionList } from "./DecisionList";

export type DecisionResponse = Pick<
  AdministrativeDocument,
  "id" | "no" | "date"
>;

type Props = {
  dec: DecisionResponse;
  setDec: (val: DecisionResponse) => void;
};

export default function DecisionSelectionDialog({ dec, setDec }: Props) {
  return (
    <Dialog>
      <DialogOverlay className="bg-black/60" />
      <DialogTrigger>
        <div>
          <Label>Chọn quyết định</Label>
          <Input
            value={dec?.no ?? "Chọn quyết định"}
            placeholder="Nhập quyết đinh"
            readOnly
          />
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-[50vw]!">
        <DialogHeader>
          <DialogTitle></DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
          <div className="max-h-[80vh]! min-h-96! overflow-y-auto">
            <DecisionList setDec={setDec} />
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
