import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import DateFnsUtils from '@date-io/date-fns';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import { MuiPickersUtilsProvider, DateTimePicker } from 'material-ui-pickers';
import { PickerCss } from './style';
// eslint-disable-next-line react/prefer-stateless-function
const materialTheme = createMuiTheme({
  overrides: {
    MuiDialogContent: {
      root: {
        minHeight: 'auto !important',
      },
    },
    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: '#f5f5f5',
        height: '75px',
        padding: '0 8px',
        '& h6, & h4, & h3 ': {
          color: '#9e9e9e',
          fontSize: '2rem',
        },
        '& h3': {
          marginTop: '15px',
        },
        '& h6': {
          fontSize: '1rem',
        },
      },
    },
    MuiPickerDTHeader: {
      timeHeader: {
        alignItems: 'center',
      },
      ampmLabel: {
        fontSize: '1rem',
      },
    },
    MuiPickersToolbarButton: {
      toolbarBtnSelected: {
        color: '#236df1 !important',
      },
    },
    MuiPickerDTTabs: {
      tabs: {
        backgroundColor: '#236df1',
      },
    },
    MuiPrivateTabIndicator: {
      colorSecondary: {
        backgroundColor: 'white',
      },
    },
    MuiPickersYear: {
      '&$selected': {
        color: '#236df1 !important',
      },
    },
    MuiPickersCalendarHeader: {
      switchHeader: {
        margin: '2px 0 !important',
      },
      iconButton: {
        boxShadow: 'inherit !important',
        padding: '8px',
        '&[disabled]': {
          backgroundColor: 'transparent !important',
        },
      },
    },
    MuiPickersCalendar: {
      transitionContainer: {
        marginTop: '2px',
        minHeight: 'auto',
      },
    },
    MuiPickersDay: {
      day: {
        minWidth: 'inherit !important',
        width: '34px',
        height: '34px',
        boxShadow: 'inherit !important',
      },
      isSelected: {
        backgroundColor: 'white',
        borderRadius: '50% !important',
        border: `solid 2px #236df1`,
        color: '#236df1',
        '&:hover': {
          backgroundColor: 'white',
        },
      },
      current: {},
    },
    MuiPickersModal: {
      dialogRoot: {
        minHeight: '400px',
        minWidth: '318px !important',
      },
      dialogAction: {
        flex: 1,
        backgroundColor: '#00a465',
        border: '2px solid #00a465',
        color: '#fff',
        margin: '0 10px 5px',
        boxShadow: 'none !important',
        '&:hover': {
          backgroundColor: '#00a465',
        },
        '&:first-child': {
          backgroundColor: 'white',
          border: '2px solid #e0e0e0',
          color: '#00a465',
        },
      },
    },
    MuiPickersClock: {
      container: {
        margin: '6px 0 0 !important',
      },
      clock: {
        width: '258px',
        height: '258px',
      },
      squareMask: {
        '& + div, & + div + div': {
          backgroundColor: '#236df1',
        },
        '& + div + div > div': {
          border: '2px solid #236df1',
          backgroundColor: '#f5f5f5',
          padding: '14px',
          top: '-23px',
          left: '-17px',
        },
      },
    },
    MuiPickersClockNumber: {
      clockNumber: {
        color: 'rgba(0, 0, 0, 1)',
        '&$selected': {
          color: '#236df1',
        },
      },
    },
  },
});
class DatePicker extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: null,
    };
  }

  handleDateChange = date => {
    const { selectDateFun } = this.props;
    // const { selectedDate } = this.state;
    // const [selectedDate, setSelectedDate] = useState();
    // setSelectedDate(date);
    this.setState({
      selectedDate: date,
    });
    selectDateFun(date);
  };

  render() {
    const { label } = this.props;
    const { selectedDate } = this.state;
    return (
      <PickerCss>
        <Grid className="pickerInputH">
          <Typography>{label}</Typography>
          <Grid className="pickerInput">
            <MuiPickersUtilsProvider utils={DateFnsUtils} theme={materialTheme}>
              <MuiThemeProvider theme={materialTheme}>
                <DateTimePicker
                  minDate={new Date()}
                  value={selectedDate}
                  onChange={this.handleDateChange}
                  showTabs={false}
                  className="pickers"
                  InputProps={{
                    endAdornment: (
                      <span>
                        <i className="SmIcon dateTime-picker-sm" />
                      </span>
                    ),
                  }}
                  placeholder="Please Select Date & Time"
                />
              </MuiThemeProvider>
            </MuiPickersUtilsProvider>
          </Grid>
        </Grid>
      </PickerCss>
    );
  }
}

DatePicker.propTypes = {
  label: PropTypes.string,
  selectDateFun: PropTypes.func,
};

export default DatePicker;