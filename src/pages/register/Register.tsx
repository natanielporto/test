import { FormEvent, useState } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!username || !password || !repeatPassword) {
      alert("Please fill all the fields!");
      return;
    }

    if (!password !== !repeatPassword) {
      alert("Passwords don't match.");
      return;
    }

    //integração com a API
    navigate("/dashboard");
  };

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleRepeatPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRepeatPassword(event.target.value);
  };

  return (
    <div className="w-full h-[90vh] flex items-center justify-center">
      <div className="flex flex-col h-96 w-72 gap-5 items-center justify-center bg-blue-500 rounded-md">
        <form onSubmit={handleSubmitForm}>
          <div>
            <Typography className="text-white">Username</Typography>
            <OutlinedInput
              className="bg-white"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div>
            <Typography className="text-white">Password</Typography>
            <OutlinedInput
              className="bg-white"
              value={password}
              type="password"
              onChange={handlePasswordChange}
            />
          </div>
          <div>
            <Typography className="text-white">Repeat Password</Typography>
            <OutlinedInput
              className="bg-white"
              value={repeatPassword}
              type="password"
              onChange={handleRepeatPasswordChange}
            />
          </div>
          <div className="flex justify-end mt-5">
            <Button
              style={{ border: "1px solid white", color: "white" }}
              type="submit"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
