import { FC, useState } from "react";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";

import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import ModalMui from "./ModalMui";
import Typography from "@mui/material/Typography";
import en from "@/locales/en";
import es from "@/locales/es";
import { styled } from "@mui/material/styles";
import { useRouter } from "next/router";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));
interface Props {
  title: string;
  text: string;
  img?: string;
  link?: string;
  target?: string;
  modalUrl?: string;
  alt?: string;
}
const CardProjectMui: FC<Props> = ({
  title,
  text,
  img,
  link,
  modalUrl,
  target,
  alt,
}) => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "es" ? es : en;
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345, minHeight: 550 }}>
      <CardHeader />
      <Typography minHeight={"70px"} variant="h3" color="text.secondary">
        {title}
      </Typography>

      <CardMedia component="img" height="284" image={img} alt={alt} />

      <CardContent sx={{ marginTop: 2 }}>
        <Typography
          sx={{ minHeight: 95 }}
          pb="15px"
          variant="body2"
          color="text.secondary"
        >
          {text}
        </Typography>
        {modalUrl ? (
          <ModalMui modalUrl={modalUrl} />
        ) : (
          <>
            <Button onClick={() => router.push(`${link}`)}> {t.projects.see}  web</Button>
          </>
        )}
      </CardContent>
    </Card>
  );
};
export default CardProjectMui;
