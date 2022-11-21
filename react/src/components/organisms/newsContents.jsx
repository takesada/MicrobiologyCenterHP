import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useLatestNews } from "../../hooks/useLatestNews";
import styled from "styled-components";

export const NewsContents = () => {
  const data = useLatestNews();
  const rows = data.informations;
  const columns = [
    { field: "date", headerName: "日付", width: 130 },
    { field: "title", headerName: "タイトル", width: 130 },
    { field: "info", headerName: "新着情報", width: 400 },
  ];

  const handleRowClick = (params) => {
    alert(params.row.info);
    setInfo(params.row.info);
  };

  const [info, setInfo] = React.useState();

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        onRowClick={handleRowClick}
      />
      <Text>{info}</Text>
    </div>
  );
};

const Text = styled.p`
  white-space: pre-wrap;
`;
