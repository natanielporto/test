import { ReactNode, createContext, useState } from "react";

interface SecretContextData {
  secretRoomOpen: boolean;
  setSecretRoomOpen: (open: boolean) => void;
}

export const SecretContext = createContext({} as SecretContextData);

export const SecretContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [secretRoomOpen, setSecretRoomOpen] = useState(false);

  return (
    <SecretContext.Provider value={{ secretRoomOpen, setSecretRoomOpen }}>
      {children}
    </SecretContext.Provider>
  );
};
