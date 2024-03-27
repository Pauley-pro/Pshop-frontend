import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { server } from "../server";

const SellerActivationPage = () => {
  const navigate = useNavigate();
  const { activation_token } = useParams();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const sendRequest = async () => {
      try {
        const response = await axios.post(`${server}/shop/activation`, {
          activation_token,
          activated: true,
        });

        console.log(response);

        if (response.status === 201) {
          setSuccess(true);
        } else {
          setError(true);
        }
      } catch (error) {
        setError(true);
      }
    };

    if (activation_token) {
      sendRequest();
    }
  }, [activation_token]);

  useEffect(() => {
    if (success) {
      // Navigate to the dashboard
      navigate("/dashboard");
    }
  }, [success]);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {error ? (
        <p>Your token is expired!</p>
      ) : success ? (
        <p>Your account has been created successfully! Navigating to the login page...</p>
      ) : (
        <p>Verifying account...</p>
      )}
    </div>
  );
};

export default SellerActivationPage;

/*import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { server } from "../server";

const SellerActivationPage = () => {
  const { activation_token } = useParams();
  const [error, setError] = useState(false);

  useEffect(() => {
    if (activation_token) {
      const sendRequest = async () => {
        await axios
          .post(`${server}/shop/activation`, {
            activation_token,
          })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            setError(true);
          });
      };
      sendRequest();
    }
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {error ? (
        <p>Your token is expired!</p>
      ) : (
        <p>Your account has been created suceessfully!</p>
      )}
    </div>
  );
};

export default SellerActivationPage;*/
