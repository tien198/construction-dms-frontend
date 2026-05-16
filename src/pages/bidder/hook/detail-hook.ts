import { getBidderByIdMock } from "@/mock-apis/bidder/bidder.api.mock";
import { useQuery } from "@tanstack/react-query";
import {
  useEffect,
  useRef,
  type FormEvent,
  type FormEventHandler,
  type SyntheticEvent,
} from "react";
import { useFetcher, useParams } from "react-router";
import { useStore, type StoreApi } from "zustand";
import { editBidderStore } from "../store/edit-bidder-store";
import {
  isEditingStoreFactory,
  type IsEditing,
} from "@/store-factory/is-editing-store-factory";

export function useDetail() {
  const id = useParams()["id"]!;
  const query = useQuery({
    queryKey: ["bidder", id],
    queryFn: () => getBidderByIdMock(id),
    enabled: !!id,
  });

  const resetBidderStore = useStore(editBidderStore, (state) => state.reset);
  useEffect(() => {
    if (query.data?.result) {
      resetBidderStore(query.data.result);
    }
  }, [query.data?.result, resetBidderStore]);

  const isEditRef = useRef<StoreApi<IsEditing> | null>(null);
  if (!isEditRef.current) {
    isEditRef.current = isEditingStoreFactory();
  }

  const { isEditing, toggleIsEditing } = useStore(
    isEditRef.current,
    (state) => state,
  );

  const isEditingToggle = () => {
    if (isEditing) {
      const isConfirm = confirm(
        "Hủy chỉnh sửa sẽ đưa tất cả giá trị về lại ban đầu",
      );
      if (isConfirm) {
        toggleIsEditing();
        if (query.data?.result) {
          resetBidderStore(query.data.result);
        }
      }
    } else {
      toggleIsEditing();
    }
  };

  const fetcher = useFetcher();

  function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();
    fetcher.submit(null, {
      action: "/nha-thau/chinh-sua/" + query?.data?.result?.id,
      method: "post",
    });
    toggleIsEditing(false);
  }

  return {
    query,
    isEditing,
    isEditingToggle,
    handleSubmit,
  };
}
