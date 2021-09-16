import { isEmpty } from '@ramda/isempty/isEmpty';
import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { fetchUserById } from '../actions/user';
import { CointainerStyle } from '../styles/layout.style';

const SuccessPage = ({ doFetchUserById }) => {
  const { id } = useParams();
  const history = useHistory();
  const [isLoading, isLoadingHandler] = useState(false);
  const [user, userHandler] = useState(null);

  useEffect(() => {
    isLoadingHandler(true);
    doFetchUserById(id)
      .then((response) => {
        console.log(response);
        if (response && !isEmpty(response)) {
          const _user = response[0];
          console.log('_user', _user);
          userHandler(_user);
          isLoadingHandler(false);
        } else {
          history.pushState('/');
        }
      })
      .catch((err) => {
        console.log(err);
        isLoadingHandler(false);
      });
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <CointainerStyle>
        {isLoading ? (
          <>
            <p>loading...</p>
          </>
        ) : (
          <div style={{ marginTop: '20px' }}>
            <p style={{ fontSize: '16px' }}>user is created</p>
            <br />
            <br />
            {user &&
              Object.keys(user).map((e, i) => (
                <Fragment key={i}>
                  <p style={{ fontSize: '14px' }}>
                    {e} : {user[e]}
                  </p>
                </Fragment>
              ))}
          </div>
        )}
      </CointainerStyle>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  doFetchUserById: (payload) => dispatch(fetchUserById(payload)),
});

export default connect(null, mapDispatchToProps)(SuccessPage);
