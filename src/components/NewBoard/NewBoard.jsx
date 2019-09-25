import * as React from 'react';
import store from '../../store';

import './NewBoard.css';

class NewBoard extends React.Component {
  getNewBoardState = () => {
    const { newBoard } = store.getState();

    if (!newBoard) {
      return (
        <div className="content_new_board_button_active">
          <div className="content_new_board_header">
            <div>Creating a board</div>
            <button
              className="content_new_board_cross"
              type="button"
              aria-label="new-board-cross"
            />
          </div>
          <div className="content_new_board_main">
            <div className="content_new_board_main_title">
              What shall we call the board?
            </div>
            <input className="content_new_board_main_input" type="text" />
            <div className="content_new_board_button_container">
              <button
                className="content_new_board_main_cancel_button"
                type="button"
              >
                CANCEL
              </button>
              <button
                className="content_new_board_main_create_button"
                type="button"
              >
                CREATE
              </button>
            </div>
          </div>
        </div>
      );
    }

    return (
      <button className="content_new_board_button" type="button">
        Create a new board...
      </button>
    );
  };

  render() {
    const { getNewBoardState } = this;

    return getNewBoardState();
  }
}

export default NewBoard;
