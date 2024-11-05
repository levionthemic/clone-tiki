import { Modal } from "antd";
import styled from "styled-components";

export const CustomModal = styled(Modal)`
  
  .ant-modal-content {
    position: relative;
    padding: 0;
    border-radius: 20px;
  }

  .ant-modal-close {
    position: absolute;
    top: 0;
    right: 0;
    width: 40px;
    height: 40px;
    transform: translate(50%, -50%);

    &:hover {
      background-color: rgba(0, 0, 0, 0);
    }
  }
`;