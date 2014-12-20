/**
 * This file is provided by Facebook for testing and evaluation purposes
 * only. Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN
 * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

var ChatMessageActionCreators = require('../actions/ChatMessageActionCreators');
var ChatThreadActionCreators = require('../actions/ChatThreadActionCreators');
var React = require('react');

var ENTER_KEY_CODE = 13;

var MessageComposer = React.createClass({

  getInitialState: function() {
    return {text: ''};
  },

  render: function() {
    return (
      <div>
        <textarea
          className="message-composer"
          name="message"
          value={this.state.text}
          onChange={this._onChange}
          onKeyDown={this._onKeyDown}
        />
        <button
          name="new-thread"
          onClick={this._onClickNewThread}>New Thread</button>
      </div>
    );
  },

  _onChange: function(event, value) {
    this.setState({text: event.target.value});
  },

  _onKeyDown: function(event) {
    if (event.keyCode === ENTER_KEY_CODE) {
      event.preventDefault();
      var text = this.state.text.trim();
      if (text) {
        ChatMessageActionCreators.createMessage(text);
      }
      this.setState({text: ''});
    }
  },

  _onClickNewThread: function(event) {
    var text = this.state.text.trim();
    ChatThreadActionCreators.createThread(text);
  }

});

module.exports = MessageComposer;
