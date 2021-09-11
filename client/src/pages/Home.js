import React, { useState, useEffect } from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
	'& > *': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Home() {
	const classes = useStyles();
	
  function FormRow({ values }) {
    return (
      <React.Fragment>
			{values.map((value) => (
				<Grid item xs={4}>
				  <Paper className={classes.paper}>{value}</Paper>
				</Grid>
			))}
      </React.Fragment>
    );
  }

  return (
	<Box my={7}>
		<div className={classes.root}>
		  <Grid container spacing={1}>
			<Grid container item xs={12} spacing={3}>
			  <FormRow values={['공지 사항', '통합 검색', 'MyPage']}/>
			</Grid>
			<Grid container item xs={12} spacing={3}>
			  <FormRow values={['이벤트', '대출 / 반납', '도서 신청']}/>
			</Grid>
			<Grid container item xs={12} spacing={3}>
			  <FormRow values={['Q/A', '자유게시판', '홈페이지 안내']}/>
			</Grid>
		  </Grid>
			<form className={classes.root} noValidate autoComplete="off">
			  <TextField id="outlined-basic" label="Outlined" variant="outlined" />
				<Button color="primary">🔍</Button>
			</form>
		</div>
    
	</Box>
  );
}
