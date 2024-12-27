import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItemIcon,
  ListItemText,
  Divider,
  ListItemButton,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import ShareIcon from "@mui/icons-material/Share";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import WindowIcon from "@mui/icons-material/Window";

type DrawerMenuProps = {
  isOpen: boolean;
  toggleDrawer: (open: boolean) => void;
  data: any;
};

const DrawerMenu: React.FC<DrawerMenuProps> = ({
  isOpen,
  toggleDrawer,
  data,
}) => {
  const [exportClicked, setExportClicked] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleExportClick = () => {
    setExportClicked(true);
  };

  const handleAccountClick = () => {
    if (exportClicked) {
      setDialogOpen(true);
    }
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
    setExportClicked(false);
  };
  return (
    <>
      <Drawer anchor="left" open={isOpen} onClose={() => toggleDrawer(false)}>
        <Box
          sx={{
            width: 250,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          {/* Main Menu */}
          <List>
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="常用" />
            </ListItemButton>
            <ListItemButton disabled>
              <ListItemIcon>
                <InsertDriveFileIcon />
              </ListItemIcon>
              <ListItemText primary="新增" />
            </ListItemButton>
            <ListItemButton disabled>
              <ListItemIcon>
                <FolderOpenIcon />
              </ListItemIcon>
              <ListItemText primary="開啟" />
            </ListItemButton>
            <ListItemButton disabled>
              <ListItemIcon>
                <ShareIcon />
              </ListItemIcon>
              <ListItemText primary="共用" />
            </ListItemButton>
            <Divider />
            <ListItemButton disabled>
              <ListItemIcon>
                <WindowIcon />
              </ListItemIcon>
              <ListItemText primary="取得增益集" />
            </ListItemButton>
            <ListItemButton disabled>
              <ListItemText sx={{ pl: "55px" }} primary="資訊" />
            </ListItemButton>
            <ListItemButton disabled>
              <ListItemText sx={{ pl: "55px" }} primary="儲存檔案" />
            </ListItemButton>
            <ListItemButton disabled>
              <ListItemText sx={{ pl: "55px" }} primary="另存新檔" />
            </ListItemButton>
            <ListItemButton disabled>
              <ListItemText sx={{ pl: "55px" }} primary="列印" />
            </ListItemButton>
            <ListItemButton onClick={handleExportClick}>
              <ListItemText sx={{ pl: "55px" }} primary="匯出" />
            </ListItemButton>
            <ListItemButton disabled>
              <ListItemText sx={{ pl: "55px" }} primary="關閉" />
            </ListItemButton>
          </List>

          {/* Bottom Items */}
          <Box>
            <Divider />
            <List>
              <ListItemButton onClick={handleAccountClick}>
                <ListItemText sx={{ pl: "55px" }} primary="帳戶" />
              </ListItemButton>
              <ListItemButton disabled>
                <ListItemText sx={{ pl: "55px" }} primary="選項" />
              </ListItemButton>
            </List>
          </Box>
        </Box>
      </Drawer>

      {/* Dialog */}
      <Dialog open={dialogOpen} onClose={handleDialogClose}>
        <DialogTitle>通知</DialogTitle>

        <DialogContent>
          {data.map((row: any, rowIndex: number) => {
            if (!row.data) {
              return null;
            }

            // Skip the first row (assumed as headers)
            return row.data
              .slice(1) // Exclude the first row
              .map((nestedRow: any, nestedRowIndex: number) => {
                const date = nestedRow?.[0]?.v;
                const name = nestedRow?.[1]?.v;
                const amount = nestedRow?.[2]?.v;

                if (amount && name && date) {
                  return (
                    <div key={`${rowIndex}-${nestedRowIndex}`}>
                      {`${amount} 萬元已成功匯入帳戶 ${name}！交易時間：${date}`}
                    </div>
                  );
                }
                return null;
              });
          })}
        </DialogContent>

        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            關閉
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DrawerMenu;
