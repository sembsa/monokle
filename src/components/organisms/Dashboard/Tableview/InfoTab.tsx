import {Tag} from 'antd';

import {K8sResource} from '@models/k8sresource';

import {useAppSelector} from '@redux/hooks';

import {timeAgo} from '@utils/timeAgo';

import * as S from './InfoTab.styled';

export const InfoTab = ({resourceId}: {resourceId: string}) => {
  const resource: K8sResource = useAppSelector(state => state.main.resourceMap[resourceId]);

  return (
    <>
      {resource && (
        <S.Container>
          {resource.namespace && (
            <S.Row>
              <S.Title>Namespace</S.Title>
              <S.BlueContent>{resource.namespace}</S.BlueContent>
            </S.Row>
          )}
          {resource.content?.metadata?.labels && (
            <S.Row>
              <S.Title>Labels</S.Title>
              <div>
                {Object.keys(resource.content.metadata.labels).map(key => (
                  <Tag
                    key={`${key}=${resource.content.metadata.labels[key]}`}
                    color="geekblue"
                    style={{marginBottom: '4px'}}
                  >
                    {key}={resource.content.metadata.labels[key]}
                  </Tag>
                ))}
              </div>
            </S.Row>
          )}
          {resource?.content?.metadata?.annotations && (
            <S.Row>
              <S.Title>Annotations</S.Title>
              <div>
                {Object.keys(resource.content.metadata.annotations).map(key => (
                  <Tag
                    key={`${key}=${resource.content.metadata.annotations[key]}`}
                    color="geekblue"
                    style={{marginBottom: '4px'}}
                  >
                    {key}={resource.content.metadata.annotations[key]}
                  </Tag>
                ))}
              </div>
            </S.Row>
          )}
          {resource.content?.spec?.nodeName && (
            <S.Row>
              <S.Title>Node selector</S.Title>
              <S.BlueContent>{resource.content.spec.nodeName}</S.BlueContent>
            </S.Row>
          )}
          {resource.content?.status?.phase && (
            <S.Row>
              <S.Title>Status</S.Title>
              {(resource.content?.status?.phase === 'Running' && (
                <S.StatusRunning>{resource.content?.status?.phase}</S.StatusRunning>
              )) ||
                (resource.content?.status?.phase === 'Terminating' && (
                  <S.StatuTerminating>{resource.content?.status?.phase}</S.StatuTerminating>
                )) ||
                (resource.content?.status?.phase === 'Active' && (
                  <S.StatusActive>{resource.content?.status?.phase}</S.StatusActive>
                )) || <Tag color="magenta">{resource.content?.status?.phase}</Tag>}
            </S.Row>
          )}
          {resource.content?.metadata?.creationTimestamp && (
            <S.Row>
              <S.Title>Created At</S.Title>
              <S.GreyContent>{timeAgo(resource.content.metadata.creationTimestamp)}</S.GreyContent>
            </S.Row>
          )}
        </S.Container>
      )}
    </>
  );
};