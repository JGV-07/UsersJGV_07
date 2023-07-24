import "./App.css"
import FormUser from "./components/FormUser"
import UserCard from "./components/UserCard"
import useFetch from "./hooks/useFetch"
import Loader from "./components/Loader"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"

function App() {
  const [updateInfo, setUpdateInfo] = useState()

  const [closeForm, setCloseForm] = useState(true)

  const [isLoading, setIsLoading] = useState(true)

  const baseUrl = "https://users-crud.academlo.tech"
  const [users, getAllUsers, createNewUser, deleteUserById, updateUserById] =
    useFetch(baseUrl, setCloseForm)

  const { register, reset, handleSubmit } = useForm()

  useEffect(() => {
    getAllUsers("/users")
    setIsLoading(false)
  }, []);

  const handleOpenForm = () => {
    setCloseForm(false)
    setUpdateInfo()
    reset({
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      birthday: "",
    })
  }

  if(isLoading) {
    return <Loader />
  } else {
    return (
      <div>
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
          register={register}
          reset={reset}
          handleSubmit={handleSubmit}
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
    )
     
  }

}

export default App;
