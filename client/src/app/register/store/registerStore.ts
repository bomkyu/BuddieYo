import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface RegisterState {
  formData: {
    email?: string;
    nickname?: string;
    id?: string;
    password?: string;
  };
  setFormData: (data: Partial<RegisterState['formData']>) => void;
}

export const useRegisterStore = create<RegisterState>()(
  devtools(
    (set) => ({
      formData: {},
      setFormData: (data) =>
        set((state) => ({
          formData: { ...state.formData, ...data },
        })),
    }),
    {
      name: 'RegisterStore',
    },
  ),
);
