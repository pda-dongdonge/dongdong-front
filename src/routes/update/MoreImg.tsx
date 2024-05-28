export default function MoreImg({ srcArray }) {
    return (
      <div className="rounded-2xl w-full max-w-md mx-auto flex overflow-hidden">
        <div className="relative w-2/3" style={{ paddingBottom: '56.25%' }}>
          <img className="absolute inset-0 w-full h-full object-cover" src={srcArray[0].imgUrl} alt="Responsive Image" />
        </div>
        <div className="relative w-2/3" style={{ paddingBottom: '56.25%' }}>
          <div className="absolute inset-0 flex-col">
            {srcArray.slice(1).map((src, index) => (
              <img key={index} className="w-full h-3/6 object-cover" src={src.imgUrl} alt="Responsive Image" />
            ))}
          </div>
        </div>
      </div>
    );
  }
  