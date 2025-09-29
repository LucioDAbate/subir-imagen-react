import { Box, Typography } from "@mui/material";

function PiePagina() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#1976d2", // azul MUI
        color: "white",
        textAlign: "center",
        padding: "20px",
        marginTop: "auto",
      }}
    >
      <Typography variant="body1">
        Creada por <strong>Lucio D'Abate</strong> - 2025
      </Typography>
      <Typography variant="body2" sx={{ marginTop: 1, fontSize: "0.8rem" }}>
        Todos los derechos reservados ©
      </Typography>
    </Box>
  );
}

export default PiePagina;
