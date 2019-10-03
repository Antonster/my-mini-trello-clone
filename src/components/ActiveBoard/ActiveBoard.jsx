import * as React from 'react';
import { connect } from 'react-redux';
import { reset } from 'redux-form';

import './ActiveBoard.css';
import TaskList from './TaskList/TaskList';
import ListCreationButton from './ListCreation/ListCreationButton/ListCreationButton';

class ActiveBoard extends React.Component {
  showResults = (value) => {
    const { clearForm } = this.props;

    console.log(value);
    clearForm();
  };

  render() {
    const { showResults } = this;

    return (
      <div className="board_container">
        <div className="board_container_board_name">Name</div>
        <div className="board_container_tasks">
          <TaskList onSubmit={showResults} />
          <ListCreationButton />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  clearForm: () => dispatch(reset('createNewTask')),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActiveBoard);
