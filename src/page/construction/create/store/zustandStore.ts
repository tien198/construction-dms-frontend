import { createStore } from "zustand";
import type { ConstructionStore } from "./store.type";
import type { Construction } from "../../type/construction";

export const initialFormData: Construction = {
  documentNo: "",
  name: "",
  dateOfSigning: null,
  budget: 0,
  stringBudget: "",
  sourceOfFunds: new Date(Date.now()).getFullYear().toString(),
  constructionExecutionTime: {
    startDate: null,
    endDate: null,
  },
  existingConditionOfTheStructure: "",
  repairScope: "",
  decision: {
    number: "",
    date: null,
  },
  packages: new Array(3).fill(null),
};

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

  resetForm: () => set({ formData: initialFormData }),
}));
