import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '../../components/Button';
import LandingCss from './style';


class Landing extends React.PureComponent {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  addTask = () => {
    
  }

  render() {
    return(
      <LandingCss>
        <Grid className="conatiner" container>
          <Grid item xs={12} lg={8} md={10}>
              <Paper className="paper" elevation={3}>
                <div className="addBtnWrapper">
                <Button className="addBtn" variant="contained" text="ADD TASk" type="primary" clickPlayMode={() => this.addTask()}/>
                </div>
                <div className="addedTaskWrapper"><div>No task added</div></div>
              </Paper>
          </Grid>
        </Grid>
      </LandingCss>
    )
  }
}

export {Landing}
