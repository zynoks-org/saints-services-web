export const WHATSAPP_URL =
  'https://wa.me/447412733920?text=' +
  encodeURIComponent("Hi Saints Services, I'd like to enquire about security services.");

export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.693.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12.001 2c-5.514 0-9.998 4.484-9.998 9.998 0 1.763.464 3.489 1.344 5.003L2 22l5.117-1.343a9.96 9.96 0 0 0 4.884 1.245h.004c5.514 0 9.998-4.484 9.998-9.998C21.999 6.484 17.518 2.002 12.001 2zm0 18.19a8.183 8.183 0 0 1-4.169-1.14l-.299-.178-3.036.797.811-2.96-.195-.304a8.17 8.17 0 0 1-1.257-4.407c0-4.518 3.677-8.194 8.198-8.194 2.19 0 4.248.853 5.795 2.401a8.14 8.14 0 0 1 2.399 5.796c0 4.518-3.676 8.189-8.246 8.189z" />
    </svg>
  );
}

export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Saints Services on WhatsApp"
      className="group fixed bottom-6 left-6 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-white/90 dark:bg-[#0b1329]/90 border border-slate-200 dark:border-white/15 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.2)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.55)] overflow-hidden active:scale-95 transition-all duration-300"
    >
      <div className="absolute inset-0 bg-[#25D366] scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full" />
      <WhatsAppIcon className="relative z-10 w-6 h-6 text-[#25D366] group-hover:text-white transition-colors duration-300" />
    </a>
  );
}
