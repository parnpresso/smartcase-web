import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';




const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  maxWidth: 400,
  color: theme.palette.text.primary,
}));


const Home = () => {
    return (
      <div className="min-h-screen h-full bg-gray-100">
        <div className="bg-white flex justify-between px-20 p-6">
          <h1 className="font-semibold text-xl">SmartCase 🚀</h1>
          <h1 className="font-semibold">Welcome back, Parn!</h1>
        </div>
        <Box sx={{ flexGrow: -5, overflow: 'hidden', px: 3 }}>
        <Typography>Issues
        <Box sx={{ flexGrow: -5, overflow: 'hidden'}}></Box>
        </Typography>
        </Box>

        <Box sx={{ flexGrow: -5, overflow: 'hidden', px: 3 }}>
      <StyledPaper
        sx={{
          my: 1,
          mx: 2,
          p: 2,
        }}
      >
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar></Avatar>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography noWrap>issue one</Typography>
          </Grid>
        </Grid>
      </StyledPaper>
      <StyledPaper
        sx={{
          my: 1,
          mx: 2,
          p: 2,
        }}
      >
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar></Avatar>
          </Grid>
          <Grid item xs>
            <Typography noWrap>issue number</Typography>
          </Grid>
        </Grid>
      </StyledPaper>
      <StyledPaper
        sx={{
          my: 1,
          mx: 2,
          p: 2,
        }}
      >
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar></Avatar>
          </Grid>
          <Grid item xs>
            <Typography>issue two</Typography>
          </Grid>
        </Grid>
      </StyledPaper>
    </Box>
    <Box sx={{ flexGrow: -5, overflow: 'hidden', px: 3 }}>
      <StyledPaper
        sx={{
          my: 1,
          mx: 2,
          p: 2,
        }}
      >
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar></Avatar>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography noWrap>issue one</Typography>
          </Grid>
        </Grid>
      </StyledPaper>
      <StyledPaper
        sx={{
          my: 1,
          mx: 2,
          p: 2,
        }}
      >
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar></Avatar>
          </Grid>
          <Grid item xs>
            <Typography noWrap>issue number</Typography>
          </Grid>
        </Grid>
      </StyledPaper>
      <StyledPaper
        sx={{
          my: 1,
          mx: 2,
          p: 2,
        }}
      >
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar></Avatar>
          </Grid>
          <Grid item xs>
            <Typography>issue two</Typography>
          </Grid>
        </Grid>
      </StyledPaper>
    </Box>
  );

        </div>
    );
  }
  export default Home;
