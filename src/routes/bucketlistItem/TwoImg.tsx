// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function TwoImg({ src1, src2 }: { src1: any; src2: any }) {
  return (
    <div className="rounded-2xl w-full max-w-md mx-auto flex overflow-hidden">
      <div className="relative w-1/2" style={{ paddingBottom: "56.25%" }}>
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src={src1.imgUrl}
          alt="Responsive Image"
        />
      </div>
      <div className="relative w-1/2" style={{ paddingBottom: "56.25%" }}>
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src={src2.imgUrl}
          alt="Responsive Image"
        />
      </div>
    </div>
  );
}
