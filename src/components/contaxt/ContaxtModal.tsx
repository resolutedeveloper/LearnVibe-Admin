// import { ModalContextType, ModalProviderProps } from "@/types/contaxt";
import { createContext, useContext, useState, type JSX } from "react";

export const ModalContext = createContext<any | undefined>(
    undefined
);

export function ModalProvider({ children }: any): JSX.Element {
    const [otpMail, setotpMail] = useState<string | null>(null);

    return (
        <ModalContext.Provider
            value={{
                otpMail,
                setotpMail,
            }}
        >
            {children}
        </ModalContext.Provider>
    );
}

export const useModal = (): any => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error("useModal must be used within a ModalProvider");
    }
    return context;
};
