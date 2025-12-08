import { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Typography,
  Box,
} from "@mui/material";

// Định nghĩa kiểu dữ liệu đầu vào
type DocNames = string[];

interface DocumentSelectorProps {
  docNames: DocNames;
  onSave?: (selected: string[]) => void; // Callback khi người dùng nhấn Lưu
}

export default function DocumentSelectorPopup({
  docNames,
  onSave,
}: DocumentSelectorProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  // Mở Popup
  const handleClickOpen = () => {
    setOpen(true);
  };

  // Đóng Popup
  const handleClose = () => {
    setOpen(false);
  };

  // Xử lý khi tick vào checkbox
  const handleToggle = (docName: string) => {
    setSelectedItems((prev) => {
      if (prev.includes(docName)) {
        // Nếu đã có thì bỏ chọn (xóa khỏi mảng)
        return prev.filter((item) => item !== docName);
      } else {
        // Nếu chưa có thì thêm vào mảng
        return [...prev, docName];
      }
    });
  };
  const toggleSelectAll = () => {
    if (selectedItems.length === docNames.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(docNames);
    }
  };

  const isAllSelected = selectedItems.length === docNames.length;

  // Xử lý khi nhấn nút Lưu/OK
  const handleSubmit = () => {
    onSave?.(selectedItems);
    handleClose();
  };

  return (
    <>
      {/* 1. Button kích hoạt */}
      <Box sx={{ textAlign: "right", mt: 2, mr: 4 }}>
        <Button
          variant="outlined"
          color="primary"
          sx={{ fontSize: "1.25rem", width: "30%", py: 4 }}
          onClick={handleClickOpen}
        >
          Tạo tài liệu
        </Button>
      </Box>
      {/* 2. Popup (Dialog) */}
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="xs">
        <DialogTitle>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            Danh sách tài liệu
            <FormControlLabel
              control={
                <Checkbox checked={isAllSelected} onClick={toggleSelectAll} />
              }
              label="Chọn tất cả"
            />
          </Box>
        </DialogTitle>

        <DialogContent dividers>
          {docNames.length > 0 ? (
            <FormGroup>
              {docNames.map((name) => (
                <FormControlLabel
                  key={name}
                  control={
                    <Checkbox
                      checked={selectedItems.includes(name)}
                      onChange={() => handleToggle(name)}
                      name={name}
                    />
                  }
                  label={name}
                />
              ))}
            </FormGroup>
          ) : (
            <Typography variant="body2" color="textSecondary">
              Không có tài liệu nào.
            </Typography>
          )}
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} color="inherit">
            Hủy
          </Button>
          <Button onClick={handleSubmit} variant="contained" color="primary">
            Lưu
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
