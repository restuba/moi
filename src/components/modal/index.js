import React from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence } from 'framer-motion';
import Wrapper from './style';
import {
  useGlobalDispatchContext,
  useGlobalStateContext,
} from '../../context/globalContext';

const ReactPortal = ({ children, wrapperId }) => {
  return createPortal(children, document.getElementById(wrapperId));
};

const Index = (props) => {
  const { show, setShow, children } = props;
  const dispatch = useGlobalDispatchContext();
  const { cursorStyles } = useGlobalStateContext();

  const onCursor = (cursorType) => {
    const cursor = (cursorStyles.includes(cursorType) && cursorType) || false;
    dispatch({ type: 'CURSOR_TYPE', cursorType: cursor });
  };

  return (
    <ReactPortal wrapperId="modal-root">
      <AnimatePresence>
        {show && (
          <Wrapper
            initial={{ x: '-100%' }}
            exit={{ x: '-100%' }}
            animate={{ x: show ? 0 : '-100%' }}
            transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
          >
            <main className="component_modal_main">
              <div className="component_modal_close">
                <button
                  type="button"
                  onClick={() => {
                    setShow(false);
                  }}
                  onMouseEnter={() => {
                    onCursor('hovered');
                  }}
                  onMouseLeave={onCursor}
                >
                  <span className="menu_line" />
                  <span className="menu_line" />
                </button>
              </div>
              <div className="component_modal_body">{children}</div>
            </main>
          </Wrapper>
        )}
      </AnimatePresence>
    </ReactPortal>
  );
};

export default Index;
