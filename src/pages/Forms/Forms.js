import React, { useState } from "react";
import classes from "./Forms.module.css";

const Forms = () => {
  // name handler

  const [enteredName, setEnteredName] = useState("");
  const [nameWasTouched, setNameWasTouched] = useState(false);

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  let nameClass = classes.input;

  const nameWasTouchedHandler = () => {
    setNameWasTouched(true);
  };

  if (enteredName && !nameWasTouched) {
    nameClass = classes.input;
  }
  if (enteredName && nameWasTouched) {
    nameClass = classes.valid;
  }
  if (!enteredName && nameWasTouched) {
    nameClass = classes.invalid;
  }

  // nickname
  const [enteredNickName, setEnteredNickName] = useState("");
  const [nickNameWasTouched, setNickNameWasTouched] = useState(false);

  const nickNameChangeHandler = (event) => {
    setEnteredNickName(event.target.value);
  };

  let nickNameClass = classes.input;

  const nickNameWasTouchedHandler = () => {
    setNickNameWasTouched(true);
  };

  if (enteredNickName && !nickNameWasTouched) {
    nickNameClass = classes.input;
  }
  if (enteredNickName && nickNameWasTouched) {
    nickNameClass = classes.valid;
  }
  if (!enteredNickName && nickNameWasTouched) {
    nickNameClass = classes.invalid;
  }

  // email

  let emailClass = classes.input;

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailWasTouched, setEnteredEmailWasTouched] = useState(false);
  // email handlers
  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };
  const inputEmailBlurHandler = (event) => {
    setEnteredEmailWasTouched(true);
  };
  if (enteredEmail && !enteredEmailWasTouched) {
    emailClass = classes.input;
  }
  if (enteredEmail && enteredEmailWasTouched) {
    emailClass = classes.valid;
  }
  if (!enteredName && enteredEmailWasTouched) {
    emailClass = classes.invalid;
  }

  return (
    <div className={classes.container}>
      <div className={classes.title}>JUST ONE MORE STEP...</div>
      <div className={classes.subtitle}>OR NOT, YOU NEVER KNOW</div>

      <form className={classes.form_container}>
        {/* name form */}
        <div className={classes.form}>
          <label htmlFor="name">NAME</label>
          <input
            type="text"
            id="name"
            onChange={nameChangeHandler}
            onBlur={nameWasTouchedHandler}
            value={enteredName}
            className={nameClass}
          />
        </div>

        {/* nickname form */}

        <div className={classes.form}>
          <label htmlFor="nickname">NICKNAME</label>
          <input
            className={nickNameClass}
            type="text"
            id="nickname"
            onChange={nickNameChangeHandler}
            onBlur={nickNameWasTouchedHandler}
            value={enteredNickName}
          />
        </div>
        {/* email */}
        <div className={classes.form}>
          <label htmlFor="email">E-MAIL</label>
          <input
            type="text"
            id="email"
            className={emailClass}
            value={enteredEmail}
            onChange={emailInputChangeHandler}
            onBlur={inputEmailBlurHandler}
          />
        </div>

        {/* favourite dog breed */}

        <div className={classes.form}>
          <label >FAVOURITE DOG BREED</label>
          <input className={classes.input_blur} type="text"  />
        </div>
        <div className={classes.actions}>
          <button>LET'S GO</button>
        </div>
      </form>
    </div>
  );
};

export default Forms;
