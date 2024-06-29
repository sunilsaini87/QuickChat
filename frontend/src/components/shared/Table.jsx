import PropTypes from "prop-types";
import { DataGrid } from "@mui/x-data-grid";
import { Container, Paper, Typography } from "@mui/material";
import { matBlack } from "../../constants/color";

const Table = ({ rows, columns, heading, rowHeight }) => {
  return (
    <Container
      sx={{
        height: "100vh",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: "1rem 4rem",
          borderRadius: "1rem",
          margin: "auto",
          width: "100%",
          overflow: "hidden",
          height: "100%",
          boxShadow: "none",
        }}
      >
        <Typography
          textAlign={"center"}
          variant="h4"
          sx={{
            margin: "2rem",
            textTransform: "uppercase",
          }}
        >
          {heading}
        </Typography>
        <DataGrid
          rows={rows}
          columns={columns}
          rowHeight={rowHeight}
          sx={{
            height: "80%",
            border: "none",
            ".MuiDataGrid-columnHeaders": {
              bgcolor: matBlack,
              color: "white",
            },
            ".MuiDataGrid-cell": {
              textOverflow: "ellipsis",
              overflow: "hidden",
              whiteSpace: "nowrap",
            },
          }}
        />
      </Paper>
    </Container>
  );
};

Table.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.object).isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      field: PropTypes.string.isRequired,
      headerName: PropTypes.string.isRequired,
      width: PropTypes.number,
    })
  ).isRequired,
  heading: PropTypes.string.isRequired,
  rowHeight: PropTypes.number,
};

Table.defaultProps = {
  rowHeight: 52,
};

export default Table;
