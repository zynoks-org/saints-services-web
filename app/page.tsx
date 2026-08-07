export default function MaintenancePage() {
  return (
    <div className="fixed inset-0 z-[999999] flex flex-col items-center justify-center bg-[#040914] px-4 text-center text-white select-none pointer-events-auto">
      <div className="max-w-md space-y-4">
        <h1 className="text-3xl font-black tracking-widest uppercase sm:text-4xl">
          Site Under Maintenance
        </h1>
        <p className="text-slate-400 text-sm leading-relaxed sm:text-base">
          We are currently updating our platform and compliance standards. Please check back shortly.
        </p>
      </div>
    </div>
  );
}