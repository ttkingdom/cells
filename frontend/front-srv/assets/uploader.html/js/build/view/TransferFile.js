'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _pydio = require('pydio');

var _pydio2 = _interopRequireDefault(_pydio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2007-2018 Charles du Jeu - Abstrium SAS <team (at) pyd.io>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This file is part of Pydio.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Pydio is free software: you can redistribute it and/or modify
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * it under the terms of the GNU Affero General Public License as published by
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * the Free Software Foundation, either version 3 of the License, or
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * (at your option) any later version.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Pydio is distributed in the hope that it will be useful,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * but WITHOUT ANY WARRANTY; without even the implied warranty of
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * GNU Affero General Public License for more details.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You should have received a copy of the GNU Affero General Public License
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * along with Pydio.  If not, see <http://www.gnu.org/licenses/>.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * The latest code can be found at <https://pydio.com>.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var TransferFile = function (_React$Component) {
    _inherits(TransferFile, _React$Component);

    function TransferFile(props) {
        _classCallCheck(this, TransferFile);

        var _this = _possibleConstructorReturn(this, (TransferFile.__proto__ || Object.getPrototypeOf(TransferFile)).call(this, props));

        _this.state = {
            progress: _this.props.item.getProgress(),
            status: _this.props.item.getStatus()
        };
        return _this;
    }

    _createClass(TransferFile, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.item.observe('progress', function (value) {
                this.setState({ progress: value });
            }.bind(this));
            this.props.item.observe('status', function (value) {
                this.setState({ status: value });
            }.bind(this));
        }
    }, {
        key: 'abortTransfer',
        value: function abortTransfer() {
            UploaderModel.Store.getInstance().stopOrRemoveItem(this.props.item);
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                item = _props.item,
                progress = _props.progress,
                className = _props.className;

            var pydio = _pydio2.default.getInstance();
            var style = void 0,
                relativeMessage = void 0;
            var messageIds = {
                "new": 433,
                "loading": 434,
                "loaded": 435,
                "error": 436
            };
            var statusMessage = item.getStatus();
            var stopButton = void 0;
            if (statusMessage === 'loading') {
                stopButton = _react2.default.createElement('span', { className: 'stop-button icon-stop', onClick: this.abortTransfer });
            } else if (statusMessage === 'error') {
                stopButton = _react2.default.createElement(
                    'span',
                    { style: { fontWeight: 500, marginBottom: 0, color: '#e53935' }, className: 'stop-button', onClick: function onClick() {
                            item.process();
                        } },
                    'RETRY ',
                    _react2.default.createElement('span', { className: 'mdi mdi-restart' })
                );
            } else {
                stopButton = _react2.default.createElement('span', { className: 'stop-button mdi mdi-close', onClick: this.abortTransfer });
            }
            if (statusMessage === 'error' && item.getErrorMessage()) {
                statusMessage = item.getErrorMessage();
            }
            if (pydio.MessageHash[messageIds[statusMessage]]) {
                statusMessage = pydio.MessageHash[messageIds[statusMessage]];
            }
            if (item.getRelativePath()) {
                relativeMessage = _react2.default.createElement(
                    'span',
                    { className: 'path' },
                    item.getRelativePath()
                );
            }
            if (progress) {
                style = { width: progress + '%' };
            }
            return _react2.default.createElement(
                'div',
                { className: "file-row upload-" + item.getStatus() + " " + (className ? className : "") },
                _react2.default.createElement('span', { className: 'mdi mdi-file' }),
                ' ',
                item.getFile().name,
                relativeMessage,
                _react2.default.createElement(
                    'span',
                    { className: 'status' },
                    statusMessage
                ),
                stopButton,
                _react2.default.createElement('div', { className: 'uploader-pgbar', style: style })
            );
        }
    }]);

    return TransferFile;
}(_react2.default.Component);

exports.default = TransferFile;
