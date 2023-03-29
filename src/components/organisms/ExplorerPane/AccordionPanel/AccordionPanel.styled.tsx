import {Collapse} from 'antd';

import styled from 'styled-components';

export const Panel = styled(Collapse.Panel)<{$contentHeight: number}>`
  &.ant-collapse-item-active {
    height: 100%;
  }

  .ant-collapse-content-box {
    padding: 0 !important;
    overflow-y: hidden;
    max-height: ${props => props.$contentHeight}px;
    height: ${props => props.$contentHeight}px;
  }
`;
