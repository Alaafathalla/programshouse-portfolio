export default function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#111521]">
      <div className="relative flex h-20 w-20 items-center justify-center">
        <span className="absolute h-20 w-20 rounded-full border border-[#77A6D0]/20"></span>

        <span className="absolute h-20 w-20 rounded-full border-2 border-transparent border-t-[#77A6D0] animate-spin"></span>

        <span className="absolute h-14 w-14 rounded-full border-2 border-transparent border-r-[#4E8FFF] animate-spin [animation-duration:1.3s] [animation-direction:reverse]"></span>

        <span className="h-3 w-3 rounded-full bg-[#77A6D0] shadow-[0_0_20px_#77A6D0] animate-pulse"></span>
      </div>
    </div>
  );
}