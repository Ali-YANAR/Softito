import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reportsList: [
    {
      id: 1,
      title: "Ciro_Raporu.pdf",
      size: "2.4MB",
      date: "24.06.2026 16.00",
      url: "#",
    },
    {
      id: 2,
      title: "Stock_Raporu.pdf",
      size: "2.4MB",
      date: "24.06.2026 16.00",
      url: "#",
    },
  ],
};

const reportsSlice = createSlice({
  name: "reports",
  initialState,
  reducers: {
    generateReport: (state, action) => {
      const { type, range, format } = action.payload;
      const fileExt = format === "Excel(.xlsx)" ? "xlsx" : "pdf";
      const titleAbbr = type
        .split(" ")
        .map((w) => w[0])
        .join("")
        .toUpperCase();
      const rangeClean = range.replace(" ", "");
      const title = `${titleAbbr}_Raporu_${rangeClean}.${fileExt}`;
      const sizeNum = (1.2 + Math.random() * 3).toFixed(1);
      const size = `${sizeNum} MB`;
      const dateStr = new Date().toLocaleString("tr-TR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });

const content = `AuraCRM - Rapor Belgesi\n========================\nRapor Adı    : ${title}\nRapor Türü   : ${type}\nTarih Aralığı: ${range}\nOluşturulma  : ${dateStr}\n========================\nBu rapor AuraCRM sistemi tarafından otomatik oluşturulmuştur.`;

  const url = `data:text/plain;charset=utf-8,${encodeURIComponent(content)}`;

      const nextId =
        state.reportsList.length > 0
          ? Math.max(...state.reportsList.map((r) => r.id)) + 1
          : 1;
      state.reportsList.unshift({
        id: nextId,
        title,
        size,
        date: dateStr,
       // url: "#",
       url
      });
    },
  },
});
export const { generateReport } = reportsSlice.actions;
export default reportsSlice.reducer;
