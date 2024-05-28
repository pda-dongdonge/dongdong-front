export default function SingleImg({ src }) {
    return (
      <div className="w-full max-w-md mx-auto">
        <img className="rounded-2xl mb-3 w-full h-auto object-cover" src={src.imgUrl} alt="Responsive Image" />
      </div>
    );
  }