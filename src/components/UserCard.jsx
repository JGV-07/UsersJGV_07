import "./styles/UserCard.css"
import { useState } from "react"

const UserCard = ({ user, deleteUserById, setUpdateInfo, handleOpenForm }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleDelete = () => {
    setIsModalOpen(true)
  };

  const handleConfirmDelete = () => {
    deleteUserById("/users", user.id);
    setIsModalOpen(false)
  };

  const handleCancelDelete = () => {
    setIsModalOpen(false)
  };

  const handleUpdate = () => {
    handleOpenForm()
    setUpdateInfo(user)
  };

  return (
    <>
      {/* MODAL */}
      <div className={`modal-container ${isModalOpen ? "modal-open" : ""}`}>
        <div className="modal-content">
          <p className="modal-p">Are you sure you want to delete {`${user.first_name} ${user.last_name}`}? </p>
          <div>
            <button className="modal-yes" onClick={handleConfirmDelete}>Yes</button>
            <button className="modal-no" onClick={handleCancelDelete}>No</button>
          </div>
        </div>
      </div>

      <article className="user-container">
        <h2 className="user-name">{`${user.first_name} ${user.last_name}`}</h2>
        <hr className="user-hr" />

        <ul className="user-container-info">
          <li className="user-info">
            <span className="user__information">Email:</span>
            <span className="user-info-api">
              <i className="bx bx-envelope user_mail"></i> {user.email}
            </span>
          </li>

          <li className="user-info">
            <span className="user__information">Birthday:</span>
            <span className="user-info-api">
              <i className="bx bxs-gift user_gift"></i> {user.birthday}
            </span>
          </li>
        </ul>
        <hr className="user-hr" />

        <footer className="user-btn">
          <button onClick={handleDelete}>
            <i className="bx bxs-trash bx-border bx-sm btn-trash"></i>
          </button>
          <button onClick={handleUpdate}>
            <i className="bx bx-edit bx-border bx-sm btn-edit"></i>
          </button>
        </footer>
      </article>
    </>
  )
}

export default UserCard;
