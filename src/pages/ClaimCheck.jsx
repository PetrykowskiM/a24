import React, { Component } from "react";
import { withRouter } from "react-router";

import TopBar from "../components/TopBar";
import CenteredContainer from "../components/Styled/Container/CenteredContent";
import Container from "../components/Styled/Container";
import Button from "../components/Styled/Button";
import Title from "../components/Styled/Text/Title";
import Label from "../components/Styled/Text/Label";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextField from "material-ui/TextField";

import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";

import DatePicker from "material-ui/DatePicker";

const MarginContainer = Container.extend`
  margin: 1rem 0;
`;

const PufferContainer = Container.extend`
  height: 1rem;
`;

class Landingpage extends Component {
  state = {
    email: "",
    age: "",
    zip: "",
    salary: "",
    companySize: "",
    jobStart: null,
    jobEnd: null
  };

  onChange(key, value) {
    this.setState({
      [key]: value
    });
  }

  onClick() {
    fetch("/check", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    }).then(() => {
      this.props.history.push("/success");
    });
  }

  render() {
    const formComplete = Object.keys(this.state).reduce(
      (prevValue, currValue) => prevValue && this.state[currValue],
      true
    );
    return (
      <Container>
        <MuiThemeProvider>
          <TopBar dark />
          <CenteredContainer>
            <MarginContainer>
              <Title dark>Kontaktdaten</Title>
            </MarginContainer>
            <Label dark block fontSize={"medium"} height={1.5}>
              Um Ihnen ihren Anspruch mitzuteilen benötigen wir Ihre
              Email-Adresse
            </Label>
            <TextField
              floatingLabelText="Email-Adresse"
              fullWidth
              onChange={(event, newValue) => this.onChange("email", newValue)}
            />
            <br />
            <br />
            <Label dark block fontSize={"medium"} height={1.5}>
              Darüber hinaus benötigen wir einige persönliche Informationen, die
              für einen Anspruch ausschlaggebend sind.
            </Label>
            <TextField
              floatingLabelText="Alter"
              fullWidth
              onChange={(event, newValue) => this.onChange("age", newValue)}
            />
            <br />
            <TextField
              floatingLabelText="Postleitzahl"
              fullWidth
              onChange={(event, newValue) => this.onChange("zip", newValue)}
            />
            <br />
            <MarginContainer>
              <Title dark>Informationen über Ihre Beschäftigung</Title>
            </MarginContainer>
            <TextField
              floatingLabelText="Bruttomonatsgehalt"
              fullWidth
              type="number"
              onChange={(event, newValue) => this.onChange("salary", newValue)}
            />
            <br />
            <SelectField
              floatingLabelText="Unternehmensgröße"
              fullWidth
              onChange={(event, index, newValue) =>
                this.onChange("companySize", newValue)
              }
              value={this.state.companySize}
            >
              <MenuItem value={1} primaryText="0 - 5 Mitarbeiter" />
              <MenuItem value={2} primaryText="6 - 10 Mitarbeiter" />
              <MenuItem value={3} primaryText="11 - 50 Mitarbeiter" />
              <MenuItem value={4} primaryText="mehr als 51 Mitarbeiter" />
            </SelectField>
            <br />
            <br />
            <DatePicker
              floatingLabelText="Datum der Anstellung"
              fullWidth
              onChange={(event, newDate) =>
                this.onChange("jobStart", new Date(newDate).getTime())
              }
            />
            <br />
            <DatePicker
              floatingLabelText="Datum der Entlassung"
              fullWidth
              onChange={(event, newDate) => {
                console.log(newDate);
                this.onChange("jobEnd", new Date(newDate).getTime());
              }}
            />
            <br />
            <Button
              disabled={!formComplete}
              onClick={() => (formComplete ? this.onClick() : null)}
            >
              Anspruch kostenfrei prüfen
            </Button>
            <PufferContainer />
          </CenteredContainer>
        </MuiThemeProvider>
      </Container>
    );
  }
}

export default withRouter(Landingpage);
