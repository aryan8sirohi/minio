import { ClerkProvider } from '@clerk/clerk-react';

const clerkConfig = {
  apiKey: '<pk_test_ZGVlcC1mbGFtaW5nby02MS5jbGVyay5hY2NvdW50cy5kZXYk>',
  frontendApi: 'https://<pk_test_ZGVlcC1mbGFtaW5nby02MS5jbGVyay5hY2NvdW50cy5kZXYk>.accounts.clark.dev',
};

export default function ClerkWrapper({ children }) {
  return (
    <ClerkProvider {...clerkConfig}>
      {children}
    </ClerkProvider>
  );
}