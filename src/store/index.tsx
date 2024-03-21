import { create } from 'zustand';

type ReportTableData = {
    _id: string;
    review_id: string;
    user_id: string;
    business_id: string;
    stars: number;
    useful: number;
    funny: number;
    cool: number;
    text: string;
    date: Date;
};

type GlobalStore = {
    reports: ReportTableData[];
    setReports: (newReports: ReportTableData[]) => void;
};

export const useGlobalStore = create<GlobalStore>((set) => ({
    reports: [],
    setReports: (newReports: ReportTableData[]) => set({ reports: newReports }),
}));
