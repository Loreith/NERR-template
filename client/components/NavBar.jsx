import React from 'react';

const NavBar = ({marginLeft='50px', marginRight='50px', appBarHeight = '5vh', titleText = 'NERR Template!'}) => {
    const styles = {
      root: {
        display: 'flex',
        height: appBarHeight,
        width: '100%',
        zIndex: 5,
        position: 'fixed',
        top: 0, left: 0,
        paddingLeft: '24px',
        paddingRight: '24px',
        borderBottomWidth: '1px',
        borderBottomStyle: 'solid',
        borderBottomColor: 'rgba(47, 79, 79, .5)',

      },
      hostLogo: {
        height: appBarHeight,
        position: 'fixed',
        top: 0, left: marginLeft
      },
      title: {
        position: 'fixed',
        marginLeft: '45vw',
        height: appBarHeight,
      }
    };

    return (
      <div style={styles.root}>
        <div>
          <h style={styles.title}>{titleText}</h>
        </div>
        <div>
          <img style={styles.hostLogo} src="/static/images/logo.png" />
        </div>
      </div>
    );
};

export default NavBar;
