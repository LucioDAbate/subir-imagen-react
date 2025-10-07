function Ubicacion() {
  return (
    <>
        <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
          <iframe
            title="¿Cómo encontrarnos?"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28979.78247609333!2d-65.45719425381796!3d-24.779258531080732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941bc23453da79ff%3A0xff5cc56be25681e3!2sPlaza%20Espa%C3%B1a%2C%20Salta!5e0!3m2!1ses-419!2sar!4v1759107040148!5m2!1ses-419!2sar" 
            height="450"
            style={{ border: 0, borderRadius: "10px" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
    </>
  );
}
export default Ubicacion;