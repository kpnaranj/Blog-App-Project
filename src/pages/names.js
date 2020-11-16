import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const names = [
  {
    title: "Kevin Narsh",
    id: 1,
    carrer: "Computer Engineer",
    potential: "100%",
  },
  {
    title: "Kevin Naranjo",
    id: 2,
    carrer: "Computer Science",
    potential: "80%",
  },
  {
    title: "Kevin Leandro",
    id: 3,
    carrer: "Designer",
    potential: "60%",
  },
  {
    title: "Kevin Dereck",
    id: 4,
    carrer: "Professor",
    potential: "1000%",
  },
];

export default function Names() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Carrer</TableCell>
            <TableCell align="right">Potential</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {names.map((name) => (
            <TableRow key={name.id}>
              <TableCell component="th" scope="row">
                {name.title}
              </TableCell>
              <TableCell align="right">{name.carrer}</TableCell>
              <TableCell align="right">{name.potential}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
