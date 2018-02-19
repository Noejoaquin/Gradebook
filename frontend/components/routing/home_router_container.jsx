import React from "react";
import { connect } from "react-redux";
import HomeRouter from "./home_router";

const mapStateToProps = (state, ownProps) => {
  let role = state.session.currentUser.role;
  let id = state.session.currentUser.id;
  return {
    role,
    id,
    ownProps
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeRouter);
