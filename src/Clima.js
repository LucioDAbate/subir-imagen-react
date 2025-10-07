import { useEffect, useState } from "react";
import {  Box, Typography, CircularProgress, Card, CardMedia, CardContent, Paper} from "@mui/material";

const ClimaSalta = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchClima = async () => {
      try {
        const apiKey = "f643896ac906082994f331c21cccab94"; // reemplazá con tu clave real
        const url = `http://api.weatherstack.com/current?access_key=${apiKey}&query=Salta`;

        const resp = await fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`);
        if (!resp.ok) throw new Error("Error en la petición");

        const json = await resp.json();
        setData(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchClima();
  }, []);

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress size={60} />
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        sx={{
          textAlign: "center",
          mt: 8,
        }}
      >
        <Typography color="error" variant="h6">
          Error: {error}
        </Typography>
      </Box>
    );
  }

  const location = data?.location;
  const current = data?.current;

  if (!location || !current) {
    return (
      <Box
        sx={{
          textAlign: "center",
          mt: 8,
        }}
      >
        <Typography color="error" variant="h6">
          No se pudieron obtener los datos del clima.
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)",
        p: 2,
      }}
    >
      <Paper
        elevation={6}
        sx={{
          p: 4,
          borderRadius: 4,
          maxWidth: 400,
          textAlign: "center",
          backgroundColor: "rgba(255,255,255,0.9)",
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", color: "#1976d2" }}>
          Clima en {location.name}
        </Typography>
        <Typography variant="subtitle1" gutterBottom sx={{ color: "#555" }}>
          {location.region}, {location.country}
        </Typography>

        <Card
          sx={{
            boxShadow: "none",
            backgroundColor: "transparent",
          }}
        >
          <CardMedia
            component="img"
            height="120"
            image={current.weather_icons[0]}
            alt={current.weather_descriptions[0]}
            sx={{
              width: "120px",
              height: "120px",
              objectFit: "contain",
              mx: "auto",
            }}
          />
          <CardContent>
            <Typography variant="h5" sx={{ fontWeight: "500" }}>
              {current.weather_descriptions[0]}
            </Typography>
            <Typography variant="h6" sx={{ mt: 1 }}>
              🌡️ {current.temperature}°C
            </Typography>
            <Typography variant="body1" sx={{ color: "#444" }}>
              💨 Viento: {current.wind_speed} km/h
            </Typography>
            <Typography variant="body1" sx={{ color: "#444" }}>
              💧 Humedad: {current.humidity}%
            </Typography>
          </CardContent>
        </Card>
      </Paper>
    </Box>
  );
};

export default ClimaSalta;
