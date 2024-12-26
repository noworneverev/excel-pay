import { useState } from "react";
import "./App.css";
import { Workbook } from "@fortune-sheet/react";
import "@fortune-sheet/react/dist/index.css";
import DrawerMenu from "./DrawerMenu"; // Import DrawerMenu
import { IconButton, Link } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import GitHubIcon from "@mui/icons-material/GitHub";

function App() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [data, setData] = useState([
    {
      name: "工作表1",
      celldata: [
        { r: 0, c: 0, v: { v: "日期", m: "日期" } },
        { r: 0, c: 1, v: { v: "姓名", m: "姓名" } },
        { r: 0, c: 2, v: { v: "數字", m: "數字" } },
        { r: 0, c: 3, v: { v: "公司", m: "公司" } },
        { r: 0, c: 5, v: { v: "用途", m: "用途" } },
        { r: 0, c: 6, v: { v: "經理人", m: "經理人" } },
        { r: 1, c: 0, v: { v: "2022/11/1", m: "2022/11/1" } },
        { r: 1, c: 1, v: { v: "小沈", m: "小沈" } },
        { r: 1, c: 2, v: { v: "1500", m: "1500" } },
      ],
    },
  ]);

  const toggleDrawer = (open: boolean) => {
    setDrawerOpen(open);
  };

  const handleWorkbookChange = (updatedData: any) => {
    setData(updatedData); // Update the entire data when Workbook changes
  };

  return (
    <div style={{ display: "flex", height: "100vh", flexDirection: "column" }}>
      {/* Top Bar */}
      <div
        style={{
          height: "50px",
          display: "flex",
          alignItems: "center",
          backgroundColor: "#f5f5f5",
          padding: "0 10px",
        }}
      >
        <IconButton onClick={() => toggleDrawer(true)}>
          <MenuIcon />
        </IconButton>
        <span style={{ marginLeft: "10px", fontSize: "16px" }}>Excel Pay</span>

        <Link
          href="https://www.ptt.cc/bbs/Gossiping/M.1735226140.A.A94.html"
          target="_blank"
          rel="noopener noreferrer"
          color="primary"
          underline="hover"
          style={{
            marginLeft: "10px",
            fontSize: "16px",
            fontWeight: "bold",
            textDecoration: "none",
          }}
        >
          教學
        </Link>

        <IconButton
          href="https://github.com/noworneverev/excel-pay"
          target="_blank"
          rel="noopener noreferrer"
          color="inherit"
          style={{ marginLeft: "auto" }}
        >
          <GitHubIcon />
        </IconButton>
      </div>

      {/* Drawer Menu */}
      <DrawerMenu
        isOpen={isDrawerOpen}
        toggleDrawer={toggleDrawer}
        data={data} // Pass the updated number
      />

      {/* Workbook */}
      <div style={{ flex: 1, overflow: "auto" }}>
        <Workbook data={data} onChange={handleWorkbookChange} />
      </div>
    </div>
  );
}

export default App;
