const UserCard = ({ name, age, role }) => {
  return (
    <div className="user-card">
      <h1>{name}</h1>
      <p>Age:{age}</p>
      <p>Role :{role}</p>
    </div>
  );
};
export default UserCard;
