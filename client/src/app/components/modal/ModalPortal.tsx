import { createPortal } from 'react-dom';
import ModalContent from './ModalContent';

const ModalPortal = () => {
  return <div>{createPortal(<ModalContent>asd</ModalContent>)}</div>;
};
export default ModalPortal;
