import styled from '@emotion/styled';
import { Button } from '../../../../components/Button';
import { UserInfo } from '../../../../components/UserInfo';

const $Header = styled.header({
  display: 'flex',
  padding: '13px 20px',
  background: '#141414',
  borderBottom: ' 1px solid #3A3A3A',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const Header = () => {
  return (
    <$Header>
      <Button height="42px" isPlay>
        Создать комнату
      </Button>
      <UserInfo avatarUrl="/c1f2a18863a127d71251dd0740442806.jpg" userName="@daniaaa1717" />
    </$Header>
  );
};
