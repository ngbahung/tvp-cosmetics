import React from "react";
import { Input } from "@nextui-org/react";
import { EyeOff, Eye } from 'lucide-react';
export default function PassWord({ label, size, className }) {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <Input
      label={label}
      variant="bordered"
      size={size ? size : "md"}
      className={className}
      endContent={
        <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
          {isVisible ? (
            <Eye />
          ) : (
            <EyeOff />
          )}
        </button>
      }
      type={isVisible ? "text" : "password"}
    />
  );
}
