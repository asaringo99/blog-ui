import { createContext } from 'react';

type PageNameContextType = string | null;

const PageNameContext = createContext<PageNameContextType>(null);

export default PageNameContext;
