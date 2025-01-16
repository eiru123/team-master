import Container from '@/components/ui/Container';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return <Container display="block">{children}</Container>;
};

export default Layout;
