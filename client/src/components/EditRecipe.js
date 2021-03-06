import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import RecipeForm from './RecipeForm';
import { updateRecipe } from '../actions/recipesActions';

class EditRecipe extends Component {
  onSubmit = values => {
    this.props.updateRecipe(this.props.location.state._id, {
      ...this.props.location.state,
      ...values
    });
  };

  render() {
    const cancelLink = (
      <Link
        to={`/recipes/${this.props.location.state._id}`}
        className="btn btn-secondary">
        Cancel
      </Link>
    );

    return (
      <Fragment>
        <h1 className="mt-3">Edit Recipe</h1>
        <RecipeForm
          initialValues={this.props.location.state}
          onSubmit={this.onSubmit}
          cancelLink={cancelLink}
        />
      </Fragment>
    );
  }
}

export default connect(
  null,
  { updateRecipe }
)(EditRecipe);
