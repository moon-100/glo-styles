import {
  createContext,
  Dispatch,
  Fragment,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'

interface Props {
  children: ReactNode
}

type ModalContextType = {
  setModal: Dispatch<SetStateAction<ReactNode>>
}

export const ModalContext = createContext<ModalContextType>({
  setModal: null,
})

export default function ModalProvider(props: Props) {
  const [modal, setModal] = useState<ReactNode>(null)
  const handleClickOverlay = (e: React.MouseEvent<HTMLDivElement>) => {
    const targetId = (e.target as HTMLDivElement).id
    if (modal && targetId === 'overlay') {
      setModal(null)
    }
  }
  const renderModal = () => {
    return modal ? (
      <Overlay id="overlay" onClick={handleClickOverlay}>
        {modal}
      </Overlay>
    ) : null
  }
  return (
    <ModalContext.Provider value={{ setModal }}>
      <ModalContainer>{renderModal()}</ModalContainer>
      {props.children}
    </ModalContext.Provider>
  )
}

export function ModalContainer(props: Props) {
  return createPortal(
    <Fragment>{props.children}</Fragment>,
    document.querySelector('#modal') as Element,
  )
}

/**
 * @todo 사이드바 z-index가 99인데 이거 숫자 내려야함 z-index를 어떻게 관리해야 하는가
 */
const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`
