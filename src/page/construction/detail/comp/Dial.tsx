import * as React from "react";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import { styled } from "@mui/material/styles";

import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from "@mui/icons-material/Done";
import PrintIcon from "@mui/icons-material/Print";
import { useFetcher, useNavigate, useParams } from "react-router";

const CusSpeedDial = styled(SpeedDial)(() => ({
  position: "fixed",
  right: 220,
  bottom: 30,
  padding: "2.5rem",
  "& .MuiSpeedDialAction-fab": {
    padding: "3rem",
  },
}));

type ActionItem = {
  name: string;
  href: string;
  icon: React.ReactNode;
  type: "nav" | "action";
};

const actionItems: ActionItem[] = [
  { name: "Chỉnh sửa", href: "/edit", icon: <EditIcon />, type: "nav" },
  {
    name: "Phê duyệt",
    href: "/cong-trinh/approve/",
    icon: <DoneIcon />,
    type: "action",
  },
  {
    name: "Tạo .docx",
    href: "/cong-trinh/gen-doc/",
    icon: <PrintIcon />,
    type: "action",
  },
];

type Props = { decId: string };
export default function DecisionAction({ decId }: Props) {
  const nav = useNavigate();
  const fetcher = useFetcher();
  const params = useParams();
  const conId = params["construction-id"]!;
  const period = params["period"]!;

  const actions = actionItems;

  return (
    <CusSpeedDial
      ariaLabel="quick actions"
      icon={<SpeedDialIcon icon={<AddIcon />} />}
      direction="up"
    >
      {actions.map((a) => (
        <SpeedDialAction
          key={a.name}
          icon={
            <span>
              {a.name} {a.icon}
            </span>
          }
          onClick={() =>
            a.type === "nav"
              ? nav(a.href)
              : fetcher.submit(
                  {
                    conId,
                    decId,
                    period,
                  },
                  {
                    method: "post",
                    action: a.href,
                  },
                )
          }
        />
      ))}
    </CusSpeedDial>
  );
}
