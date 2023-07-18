import "./styles/UserCard.css";


const UserCard = ({ user, deleteUserById, setUpdateInfo, handleOpenForm }) => {

    const handleDelete = () =>{
        deleteUserById('/users', user.id)
    }

    const handleUpdate = () =>{
        setUpdateInfo(user)
        handleOpenForm()
    }

  return (
    <article className="user-container">
      <h2 className="user-name">{`${user.first_name} ${user.last_name}`}</h2>
      <hr className="user-hr"/>
      <ul className="user-container-info">
        <li className="user-info">
          <span className="user__information">Email:</span>
          <span className="user-info-api"><i className='bx bx-envelope user_mail'></i> {user.email}</span>
        </li>
        <li className="user-info">
          <span className="user__information">Birthday:</span>
          <span className="user-info-api"><i className='bx bxs-gift user_gift'></i> {user.birthday}</span>
        </li>
      </ul>
      <hr className="user-hr"/>
      <footer className="user-btn">
        <button onClick={handleDelete}><i className='bx bxs-trash bx-border bx-sm btn-trash'></i></button>
        <button onClick={handleUpdate}><i className='bx bx-edit bx-border bx-sm btn-edit'></i></button>
      </footer>
    </article>
  );
};

export default UserCard;
