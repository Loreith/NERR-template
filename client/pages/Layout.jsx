import React from 'react';
import { connect } from 'react-redux'

import NavBar from '../components/NavBar';

import { handleResize, toggleDrawer } from '../actions/viewSettings';



class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.handleResize = (event) => {
      this.props.handleResize(window.innerWidth);
    };

    this.state = {
    }
  }

  componentWillMount = () => {
    //Initialisation for stuff that needs to run all the time like socket.io
  }

  componentDidMount() {
    // add an on-resize event listener
    window.addEventListener('resize', this.handleResize);
    this.handleResize(); // call once on-load
  }

  render() {
    const { toggleDrawer, viewSettings } = this.props;
    const { drawerOpen, currWidth } = viewSettings;

    const styles = {
      root: {
        height: '100%'
      },
      container: {
        paddingTop: '5vh',
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: '100vw',
        minHeight: '100%',
        // pad content if sidebar is open and viewport > 768px
        paddingLeft: '0px',
        paddingBottom: '0px'
      }
    };

    return (
      <div style={styles.root}>
        <NavBar />
        <div style={styles.container}>
          {this.props.children}
        </div>
      </div>
    );
  }
}


// Map the state of the store to component properties.
const mapStateToProps = ({ viewSettings }) => ({ viewSettings });

// Maps the store's dispatch method to component properties
const mapDispatchToProps = (dispatch) => ({
  handleResize: (size) => {
    dispatch(handleResize(size));
  },
  toggleDrawer: () => {
    dispatch(toggleDrawer());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
