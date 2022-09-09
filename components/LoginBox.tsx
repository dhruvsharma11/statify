import React from "react";
import Button from "react-bootstrap/Button";
import { signIn } from "next-auth/react";
import { motion } from "framer-motion";

const LoginBox = () => {
  return (
    <motion.div
      className="btn-custom border border-dark "
      whileHover={{ scale: 1.2 }}
    >
      <Button
        size="lg"
        className="fs-5 text-black shadow-none"
        variant="custom"
        onClick={() => signIn("spotify", { callbackUrl: "/home" })}
      >
        Start
      </Button>{" "}
    </motion.div>
  );
};

export default LoginBox;
