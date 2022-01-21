import React from 'react';
import {useMeasure} from 'react-use';

import {DeliveredProcedureOutlined} from '@ant-design/icons';

import _ from 'lodash';

import {AnyTemplate} from '@models/template';

import * as S from './TemplateInformation.styled';

interface IProps {
  template: AnyTemplate;
  onClickOpenTemplate: () => void;
}

const TemplateInformation: React.FC<IProps> = props => {
  const {template, onClickOpenTemplate} = props;

  const [infoContainerRef, {width: infoContainerWidth}] = useMeasure<HTMLDivElement>();

  return (
    <S.Container>
      <S.IconContainer>
        <S.FormOutlined />
      </S.IconContainer>

      <S.InfoContainer ref={infoContainerRef}>
        <S.Name $width={infoContainerWidth}>{template.name}</S.Name>

        <S.Description>{_.truncate(template.description, {length: 140})}</S.Description>

        <S.AdditionalInformation>
          <span>Type: {template.type}</span>
          <span>Author: {template.author}</span>
          <span>Version: {template.version}</span>
        </S.AdditionalInformation>

        <S.OpenButton
          icon={<DeliveredProcedureOutlined />}
          ghost
          size="small"
          type="primary"
          onClick={onClickOpenTemplate}
        >
          Use Template
        </S.OpenButton>
      </S.InfoContainer>
    </S.Container>
  );
};

export default TemplateInformation;
