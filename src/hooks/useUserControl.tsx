import Divider from "@/layouts/Divider";
import FlexBox from "@/layouts/FlexBox";
import React, { createContext, useContext, useEffect, useState } from "react";

interface UserControlTemplateProps {
  x: number;
  y: number;
  type: "owner" | "admin" | "user";
  onClose?: () => void;
}

interface UserControlContextType {
  userControl: React.ReactNode | null;
  openUserControl: (props: UserControlTemplateProps) => void;
  closeUserControl: () => void;
}

const UserControlContext = createContext<UserControlContextType>({
  userControl: null,
  openUserControl: () => {},
  closeUserControl: () => {},
});

function UserControlTemplate({
  x,
  y,
  type,
  onClose,
}: UserControlTemplateProps) {
  const divRef = React.useRef<HTMLDivElement>(null);
  const [yOffset, setYOffset] = useState(0);
  const [show, setShow] = useState(false);
  const className = "w-full p-2 cursor-pointer hover:bg-gray-700";
  useEffect(() => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    if (y + rect.height > window.innerHeight) {
      setYOffset(window.innerHeight - rect.height - 10);
    } else setYOffset(y);
    setShow(true);
  }, [y]);

  return (
    <div className="user_control" onClick={onClose}>
      <div
        className="user_control-container"
        style={{
          top: yOffset,
          left: x,
          visibility: show ? "visible" : "hidden",
        }}
        onClick={(e) => e.stopPropagation()}
        ref={divRef}
      >
        <FlexBox direction="col" className="w-[200px] gap-2 font-bold">
          {type === "owner" && (
            <>
              <div className={className}>make admin</div>
              <Divider color="white" />
            </>
          )}
          {type === "owner" ||
            (type === "admin" && (
              <>
                <div className={className}>kick</div>
                <div className={className}>ban</div>
                <div className={className}>mute for 5min</div>
                <Divider color="white" />
              </>
            ))}
          <div className={className}>view profile</div>
          <div className={className}>play game</div>
        </FlexBox>
      </div>
    </div>
  );
}

function UserControlImplement(): UserControlContextType {
  const [userControl, setUserControl] = useState<React.ReactNode>(<></>);
  const closeUserControl = () => {
    setUserControl(<></>);
  };
  const openUserControl = ({ x, y, type }: UserControlTemplateProps) => {
    console.log("openUserControl");
    setUserControl(
      <UserControlTemplate x={x} y={y} type={type} onClose={closeUserControl} />
    );
  };
  return { userControl, openUserControl, closeUserControl };
}

function UserControlProvider({ children }: { children: JSX.Element }) {
  const userControl = UserControlImplement();

  return (
    <UserControlContext.Provider value={userControl}>
      {children}
      {userControl.userControl}
    </UserControlContext.Provider>
  );
}

function useUserControl() {
  const context = useContext(UserControlContext);
  if (!context) {
    throw new Error("useModalContext must be used within a ModalProvider");
  }
  return context;
}

export { UserControlProvider, useUserControl };
