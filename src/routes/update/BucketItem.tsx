export default function BucketItem({ bucket, handleClick }) {


    return (
        <div key={bucket._id} onClick={() => handleClick(bucket)}>
            <h3>{bucket.title}</h3>
            <p>{bucket.contents}</p>
            <hr />
        </div>
    );
}
