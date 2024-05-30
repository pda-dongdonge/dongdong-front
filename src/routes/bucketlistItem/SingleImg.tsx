export default function SingleImg({ src }) {
  return (
    <div className="w-full max-w-md flex items-center justify-center overflow-hidden">
      <img className="rounded-2xl w-100 object-cover h-60" src={src.imgUrl} alt="Responsive Image" />
    </div>
  );
}
