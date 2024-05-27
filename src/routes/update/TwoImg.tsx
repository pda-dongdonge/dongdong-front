export default function TwoImg({ src1, src2 }) {
    return (
      <div className="rounded-2xl w-full max-w-md mx-auto flex overflow-hidden">
        <div className="relative w-1/2" style={{ paddingBottom: '56.25%' }}>
          <img className="absolute inset-0 w-full h-full object-cover" src={src1} alt="Responsive Image" />
        </div>
        <div className="relative w-1/2" style={{ paddingBottom: '56.25%' }}>
          <img className="absolute inset-0 w-full h-full object-cover" src={src2} alt="Responsive Image" />
        </div>
      </div>
    );
  }