import React from 'react';

import MainAppLayout from '@/components/layout/MainAppLayout';
import LoginForm from '@/components/Login/LoginForm';

/**
 * The main index page for the application, which serves as the login screen.
 * It composes the MainAppLayout and LoginForm components to create the
 * complete user authentication interface, centered on the page.
 */
const IndexPage: React.FC = () => {
  return (
    <MainAppLayout>
      <LoginForm />
    </MainAppLayout>
  );
};

export default IndexPage;
