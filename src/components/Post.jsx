import { useParams } from 'react-router-dom';
function Post() {
  const params = useParams();
  return (
    <div>
      {/* Use case of id to send id to request */}
      <h1>Hello {params.name}</h1>
      <p>User ID: {params.id}</p>
    </div>
  );
}
export default Post;
