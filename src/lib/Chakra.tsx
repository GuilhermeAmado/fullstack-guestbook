import {
  ChakraProvider,
  cookieStorageManagerSSR,
  localStorageManager,
} from '@chakra-ui/react';
import { GetServerSidePropsContext } from 'next';
import { Cookies } from 'next/dist/server/web/spec-extension/cookies';
import { chakraTheme } from '../chakraTheme';

type ChakraProps = {
  cookies: Cookies;
  children: React.ReactNode;
};

export function Chakra({ cookies, children }: ChakraProps) {
  // b) Pass `colorModeManager` prop
  const colorModeManager =
    typeof cookies === 'string'
      ? cookieStorageManagerSSR(cookies)
      : localStorageManager;

  return (
    <ChakraProvider colorModeManager={colorModeManager} theme={chakraTheme}>
      {children}
    </ChakraProvider>
  );
}

// also export a reusable function getServerSideProps
export function getServerSideProps({
  req,
}: {
  req: GetServerSidePropsContext['req'];
}) {
  return {
    props: {
      // first time users will not have any cookies and you may not return
      // undefined here, hence ?? is necessary
      cookies: req.headers.cookie ?? '',
    },
  };
}
