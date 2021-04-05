import React, { PureComponent } from "react";


export class Temperature extends PureComponent {
  state = {
    temperature: 0,
  };

  handleChange = (event) => {
    const writtenTemp = event.target.value;
    this.setState({ temperature: writtenTemp });
  };

  phrase = () => {
    if (this.state.temperature < 10) {
      return <p className="cold-phrase">"It's cold ❄️"</p>;
    } else if (this.state.temperature >= 10 && this.state.temperature <= 30) {
      return <p className="nice-phrase">It nice 🌼"</p>;
    } else if (this.state.temperature > 30) {
      return <p className="warm-phrase">"It's warm ☀️"</p>;
    }
  };

  render() {
    return (
      <div>
        {console.log(this.state.temperature)}
        <h1>Temperature</h1>
        <div className="container">
          <input
            onChange={this.handleChange}
            type="number"
            placeholder="Temp in celsius"
            className="temperature-input"
          ></input>
          <div>{this.phrase()}</div>
        </div>
      </div>
    );
  }
}

export default Temperature;
