import {ExclamationCircleOutlined} from '@ant-design/icons';

import styled from 'styled-components';

import {Colors} from '@monokle-desktop/shared/styles';

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const TitleIcon = styled(ExclamationCircleOutlined)`
  margin-right: 10px;
  color: ${Colors.yellowWarning};
`;
