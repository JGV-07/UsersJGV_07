import "./styles/DeleteUser.css"
import { useState } from "react";

const DeleteUser = ({deleteUserById}) => {
    
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleDelete = () => {
      setIsModalOpen(true)
    };
  
    const handleConfirmDelete = () => {
      deleteUserById("/users", user.id)
      setIsModalOpen(false)
    };
  
    const handleCancelDelete = () => {
      setIsModalOpen(false)
    };
  
  return (
    <div className="modal-container">
        {isModalOpen && (
          <div className={`modal ${isModalOpen ? "" : "hidden"}`}>
            <p>Are you sure you want to delete this user {user.name}? </p>
            <div>
              <button onClick={handleConfirmDelete}>Yes</button>
              <button onClick={handleCancelDelete}>No</button>
            </div>
          </div>
        )}
    </div>
  )
}

export default DeleteUser