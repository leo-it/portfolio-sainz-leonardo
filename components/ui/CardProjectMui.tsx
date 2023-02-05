import { FC, useState } from "react";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";

import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Link from "next/link";
import ModalMui from "./ModalMui";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

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
  target,alt
}) => {
  console.log(link);

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345, minHeight: 450 }}>
      <CardHeader />
      <Typography minHeight={"70px"} variant="h3" color="text.secondary">
        {title}
      </Typography>

      <CardMedia  component="img" height="194" image={img} alt={alt} />

      <CardContent sx={{marginTop:2}}>
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
        {modalUrl ? (
          <ModalMui modalUrl={modalUrl} />
        ) : (
          <>
            <Button>
              <Link target={target} href={`${link}`}>
                Ver más
              </Link>
            </Button>
          </>
        )}
      </CardContent>
      {/* <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions> */}
      {/*  <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>price: ${price}</Typography>
          <Typography paragraph>Categoria: {category}</Typography>{" "}
          <Typography paragraph>
            Las mejores prendas para vestir este verano
          </Typography>
        </CardContent>
      </Collapse> */}
    </Card>
  );
};
export default CardProjectMui;
