export default function Loader({ text }) {
  return (
    <div className="min-h-[500px] flex justify-center items-center">
      <div className="flex justify-center gap-1 items-baseline">
        <span className="font-bold text-[24px]">{text}</span>
        <div className="loader">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}