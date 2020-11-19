import { useStyles } from "../styles/home/Home";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

export default function Home() {
  const classes = useStyles();

  return (
    <Card>
      <Typography variant="h6" className={classes.title}>
        Home Page
      </Typography>
      <CardMedia
        className={classes.media}
        image="/img/unicorn-bike.jpg"
        title="Unicorn Bicycle"
      />
      <CardContent>
        <Typography variant="body2" component="p">
          Welcome to the Next JS home page, this is awesome
        </Typography>
      </CardContent>
    </Card>
  );
}
