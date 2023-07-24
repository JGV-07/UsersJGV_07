import { useEffect } from "react";
import "./styles/FormUser.css";

const FormUser = ({
  createNewUser,
  updateInfo,
  updateUserById,
  setUpdateInfo,
  closeForm,
  setCloseForm, 
  register,
  handleSubmit,
  reset
}) => {
    
  useEffect(() => {
    reset(updateInfo);
  }, [updateInfo]);

  const submit = (data) => {
    if (updateInfo) {
      //update
      updateUserById("/users", updateInfo.id, data);
      setUpdateInfo();
    } else {
      //create
      createNewUser("/users", data);
    }
    reset({
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      birthday: "",
    });
  };

  const handleCloseForm = () =>{
    setCloseForm(true)
  }

  return (
    <div onClick={handleCloseForm} className= {`formuser-container ${closeForm && 'close-form'}`} >
      <form onClick={e => e.stopPropagation()} className="formuser" onSubmit={handleSubmit(submit)}>
        <h2 className="formuser__title">
          <div onClick={handleCloseForm} className="formuser_close">X</div>
          {updateInfo ? "Update" : "New User"}
        </h2>
        <div className="formuser__group">
          <label className="formuser__label" htmlFor="first_name">
            First Name:
          </label>
          <input
            className="formuser__input"
            {...register("first_name")}
            type="text"
            id="first_name"
          />
        </div>
        <div className="formuser__group">
          <label className="formuser__label" htmlFor="last_name">
            Last Name:
          </label>
          <input
            className="formuser__input"
            {...register("last_name")}
            type="text"
            id="last_name"
          />
        </div>
        <div className="formuser__group">
          <label className="formuser__label" htmlFor="email">
            Email:
          </label>
          <input
            className="formuser__input"
            {...register("email")}
            type="email"
            id="email"
          />
        </div>
        <div className="formuser__group">
          <label className="formuser__label" htmlFor="password">
            Password:
          </label>
          <input
            className="formuser__input"
            {...register("password")}
            type="password"
            id="password"
          />
        </div>
        <div className="formuser__group">
          <label className="formuser__label" htmlFor="birthday">
            Birthday
          </label>
          <input
            className="formuser__input"
            {...register("birthday")}
            type="date"
            id="birthday"
          />
        </div>
        <button className="formuser__btn">
          {updateInfo ? "Update" : "New User"}
        </button>
      </form>
    </div>
  );
};

export default FormUser;
