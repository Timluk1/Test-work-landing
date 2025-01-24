import { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

interface IMenuContextProps {
    children: ReactNode;
}

interface IMenuContext {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>; 
}

export const MenuContext = createContext<IMenuContext>({ isOpen: false, setIsOpen: () => {} });

export function MenuContextProvider({ children }: IMenuContextProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <MenuContext.Provider value={{ isOpen, setIsOpen }}>
            {children}
        </MenuContext.Provider>
    );
}