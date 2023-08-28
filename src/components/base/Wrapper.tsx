import { ReactNode } from "react";
import './wrapper.css';

interface IProps {
    size?: 'small' | 'medium' | 'large';
    children: ReactNode;
};

const WrapperContainer = ({
    size = 'medium',
    children
}: IProps) => (
    <div className={['wrapper-container', `wrapper-container--${size}`].join(' ')}>
        {children}
    </div>
)

export default WrapperContainer;