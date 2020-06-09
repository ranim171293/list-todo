import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '../../components/Button';
import CreateTask from '../../components/CreateTask';
import LandingCss from './style';


class Landing extends React.PureComponent {
  constructor(props){
    super(props);
    this.state = {
      addTask: false
    }
  }

  addTask = () => {
    this.setState({
      addTask: true
    })
  }

  render() {
    const {addTask} =this.state;
    return(
      <LandingCss>
        <Grid className="conatiner" container>
          <Grid item xs={12} lg={8} md={10}>
              <Paper className="paper" elevation={3}>
                {!addTask ? 
                  (<>
                    <div className="addBtnWrapper">
                    <Button className="addBtn" variant="contained" text="ADD TASk" type="primary" clickPlayMode={() => this.addTask()}/>
                    </div>
                    <div className="addedTaskWrapper">
                      <div className="noTask">No task added</div>
                    </div>
                  </>) : 
                <CreateTask></CreateTask>
              }
              </Paper>
          </Grid>
        </Grid>
      </LandingCss>
    )
  }
}

export {Landing}
