import { Card, CardMedia, CardContent, Typography, Button, Collapse, List, ListItem, ListItemText } from "@mui/material";
import { useState } from "react";

function Dest({ titulo, precio, imagen, caracteristicas }) {
  const [open, setOpen] = useState(false);

  return (
    <Card sx={{ width: 300, boxShadow: 3, borderRadius: 2 }}>
      <CardMedia
        component="img"
        height="200"
        image={imagen} // en public/
        alt={titulo}
      />
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {titulo}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          ${precio.toLocaleString("es-AR")}
        </Typography>

        <Button
          variant="outlined"
          sx={{ mt: 2 }}
          onClick={() => setOpen(!open)}
        >
          {open ? "Ocultar detalles" : "Ver detalles"}
        </Button>

        <Collapse in={open}>
          <List dense>
            {caracteristicas.map((c, idx) => (
              <ListItem key={idx} sx={{ py: 0 }}>
                <ListItemText primary={`• ${c}`} />
              </ListItem>
            ))}
          </List>
        </Collapse>
      </CardContent>
    </Card>
  );
}

export default Dest;
