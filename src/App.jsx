import "./App.css";
import FormUser from "./components/FormUser"
import UserCard from "./components/UserCard"
import useFetch from "./hooks/useFetch"
import Loader from "./components/Loader"
import { useEffect, useState } from "react"

function App() {
  const [updateInfo, setUpdateInfo] = useState()

  const [closeForm, setCloseForm] = useState(true)

  const [isLoading, setIsLoading] = useState(true)

  const baseUrl = "https://users-crud.academlo.tech"
  const [users, getAllUsers, createNewUser, deleteUserById, updateUserById] =
    useFetch(baseUrl, setCloseForm);

  useEffect(() => {
    getAllUsers("/users");
    setIsLoading(false)
  }, []);

  const handleOpenForm = () => {
    setCloseForm(false);
  };

  /* HAY UN ERROR DE QUE SI EDITO EL FORMULARIO ME LO RELLENA, PERO SI YA NO QUIERO EDITARLO Y LUEGO QUIERO CREAR UNO NUEVO, SIGUE CON LA INFORMACION DEL QUE IBA A EDITAR ANTERIORMENTE */

  /* QUIERO QUE EL LOADER ESTE PRIMERO ANTES QUE CUALQUIER COSA CARGUE */

  return (
    <div>
      {isLoading && <Loader />}
      <div className="user__header">
        <h1 className="user__title">Users</h1>
        <button onClick={handleOpenForm} className="formuser__create">
          + Create new user
        </button>
      </div>
      <FormUser
        createNewUser={createNewUser}
        updateInfo={updateInfo}
        updateUserById={updateUserById}
        setUpdateInfo={setUpdateInfo}
        closeForm={closeForm}
        setCloseForm={setCloseForm}
      />
      <div className="user__container-info">
        {users?.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            deleteUserById={deleteUserById}
            setUpdateInfo={setUpdateInfo}
            handleOpenForm={handleOpenForm}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
