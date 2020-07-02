/*
Untranspiled Code 
class Output extends React.Component{
  constructor(props){
    super(props)
    this.state = {processedInput: "RESULT"}
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event){
  this.setState({
    input: marked(event.target.value)
  })
}
  render(){
    return(
      <div>

<textarea id="editor" value={this.state.input} onChange={this.handleChange.bind(this)} />

        <h4>Markdown Preview:</h4>
        <p id="preview">{this.state.input}</p>
      </div>
    )
  }
}

ReactDOM.render(<Output />, document.getElementById("reactTarget")) */
"use strict";

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Output =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Output, _React$Component);

  function Output(props) {
    var _this;

    _classCallCheck(this, Output);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Output).call(this, props));
    _this.state = {
      processedInput: "RESULT"
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Output, [{
    key: "handleChange",
    value: function handleChange(event) {
      this.setState({
        input: marked(event.target.value)
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", null, React.createElement("textarea", {
        id: "editor",
        value: this.state.input,
        onChange: this.handleChange.bind(this)
      }), React.createElement("h4", null, "Markdown Preview:"), React.createElement("p", {
        id: "preview"
      }, this.state.input));
    }
  }]);

  return Output;
}(React.Component);

ReactDOM.render(React.createElement(Output, null), document.getElementById("reactTarget"));