import React from "react";
import { connect } from "react-redux";
import HomeRouter from "./home_router";

const mapStateToProps = (state, ownProps) => {
  let currentUser = state.session.currentUser
  return {
    currentUser,
    ownProps
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeRouter);
