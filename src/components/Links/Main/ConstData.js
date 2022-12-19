export const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

export const columns = [
    { field: "0", headerName: "Keyword", width: 200 },
    { field: "", headerName: "Intent", width: 80 },
    { field: "1", headerName: "Volume", width: 100 },
    { field: "7", headerName: "KD%", width: 70 },
    { field: "3", headerName: "CPC", width: 70 },
    { field: "4", headerName: "Competition", width: 70 },
    { field: "5", headerName: "Results", width: 100 },
];