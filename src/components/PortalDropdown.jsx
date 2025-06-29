import ReactDOM from 'react-dom';

export default function PortalDropdown({ children }) {
  return ReactDOM.createPortal(
    children,
    document.body
  );
} 