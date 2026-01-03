import type { ConstructionStore } from "./store.type";
import type { BidPackage } from "../../type/construction.type";
import { createStore } from "zustand";
import { initialFormData } from "../constant/initalData/initialFormData.const";

export const constructionStore = createStore<ConstructionStore>()((set) => ({
  formData: initialFormData,

  // Tương đương handleChange (nhưng nhận value trực tiếp thay vì event)
  setField: (name, value) =>
    set((state) => ({
      formData: { ...state.formData, [name]: value },
    })),

  // Tương đương handleNestedChange
  setNestedField: (parent, child, value) =>
    set((state) => ({
      formData: {
        ...state.formData,
        [parent]: {
          ...(state.formData[parent] as object),
          [child]: value,
        },
      },
    })),

  // Tương đương handleDateChange
  setDateField: (name, value) =>
    set((state) => ({
      formData: {
        ...state.formData,
        [name]: value ? value.toDate() : null,
      },
    })),

  // Tương đương handleNestedDateChange
  setNestedDateField: (parent, child, value) =>
    set((state) => ({
      formData: {
        ...state.formData,
        [parent]: {
          ...(state.formData[parent] as object),
          [child]: value ? value.toDate() : null,
        },
      },
    })),

  setPackage: (id: number, prop: keyof BidPackage, value: any) =>
    set((state) => {
      const shallow = { ...state };
      console.log(shallow.formData.packages[id]);

      (shallow.formData.packages[id]![prop] as any) = value;
      return shallow;
    }),

  resetForm: () => set({ formData: initialFormData }),
}));
