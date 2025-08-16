/** @jsxImportSource @emotion/react */
import { Modal } from '@mui/material';
import type { ModalProps } from '@mui/material';
import { css } from '@emotion/react';

const PMModal = (props: ModalProps) => {
  return (
    <Modal
      css={css`
        outline: none;
        &:focus-visible {
          outline: none;
        }
      `}
      {...props}
    />
  );
};

export default PMModal;
