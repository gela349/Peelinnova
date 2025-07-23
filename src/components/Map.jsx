export default function MapSection() {
  return (
    <div className="w-full h-[450px] mt-8 px-4">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d31767.72048951964!2d-0.24414834589388199!3d5.572184052661201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1speelinnova%20limited%20company%20location%20in%20accra!5e0!3m2!1sen!2sgh!4v1752660352072!5m2!1sen!2sgh"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="PeelInnova Map Location"
      ></iframe>
    </div>
  );
}
