// import { Link as RouterLink } from 'react-router-dom';
import NextLink from 'next/link';

// material
import { styled } from '@mui/material/styles';
import { Card, Stack, Link as MuiLink, Container, Typography } from '@mui/material';
// layouts
import AuthLayout from '../src/layouts/AuthLayout';
// components
import Page from '../src/components/Page';
import { MHidden } from '../src/components/@material-extend';
import { LoginForm } from '../src/components/authentication/login';
import AuthSocial from '../src/components/authentication/AuthSocial';

import LogoOnlyLayout from '../src/layouts/LogoOnlyLayout';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex'
  }
}));

const SectionStyle = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: 464,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: theme.spacing(2, 0, 2, 2)
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(12, 0)
}));

// ----------------------------------------------------------------------

export default function Login() {
  return (
    <RootStyle title="Login | Minimal-UI">
      <AuthLayout>
        Don’t have an account? &nbsp;
        <NextLink href="register">
          <MuiLink variant="subtitle2">Get started</MuiLink>
        </NextLink>
      </AuthLayout>

      <MHidden width="mdDown">
        <SectionStyle>
          <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
            Hi, Welcome Back
          </Typography>
          <img src="/static/illustrations/illustration_login.png" alt="login" />
        </SectionStyle>
      </MHidden>

      <Container maxWidth="sm">
        <ContentStyle>
          <Stack sx={{ mb: 5 }}>
            <Typography variant="h4" gutterBottom>
              Sign in to Minimal
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>Enter your details below.</Typography>
          </Stack>
          <AuthSocial />

          <LoginForm />

          <MHidden width="smUp">
            <Typography variant="body2" align="center" sx={{ mt: 3 }}>
              Don’t have an account?&nbsp;
              <NextLink href="register">
                <MuiLink variant="subtitle2">Get started</MuiLink>
              </NextLink>
            </Typography>
          </MHidden>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}

Page.getLayout = function getLayout(page) {
  return <LogoOnlyLayout>{page}</LogoOnlyLayout>;
};
