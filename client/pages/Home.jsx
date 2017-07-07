import React from 'react'
import { connect } from 'react-redux'


class Home extends React.Component {
  render() {

    return (
      <div>
        Home page here
      </div>
    );
  }
}

// Map the state of the store to component properties.
const mapStateToProps = ({  }) => ({  });

// Maps the store's dispatch method to component properties
const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
