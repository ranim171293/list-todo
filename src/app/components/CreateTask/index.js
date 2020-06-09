import React from 'react';
import Grid from  '@material-ui/core/Grid';
// import { formValueSelector } from 'redux-form';
// import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form/es/immutable';
import InputFormField from '../InputFormField';

class CreateTask extends React.PureComponent {
  render(){
    const {handleSubmit} = this.props;
    return(
     
      <form onSubmit={handleSubmit}>
      <Grid className="react-form-group-container">
        <Field name="name" type="text" component={InputFormField} label="Task Name" placeHolder="Create Task" />
        </Grid>
        </form>
      
    )
  }
}


  // const selector = formValueSelector('createTaskForm'); // <-- same as form name

  CreateTask = reduxForm({
    form: 'createTaskForm',
    // enableReinitialize: true,
  })(CreateTask);

  // CreateTask = connect((state, props) => {

  // })(CreateTask);

  export default CreateTask;