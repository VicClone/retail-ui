// tslint:disable:jsx-no-lambda
import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import SidePage from '../../SidePage/SidePage';
import IgnoreLayerClick from '../IgnoreLayerClick';
import Button from '../../Button';
import Toggle from '../../Toggle/Toggle';

interface SampleState {
  active: boolean;
  open: boolean;
}

class Sample extends Component<{}, SampleState> {
  public state: SampleState = {
    active: false,
    open: false,
  };

  public render() {
    return (
      <div>
        {this.state.open && (
          <SidePage onClose={() => this.setState({ open: false })}>
            <SidePage.Header>Голова</SidePage.Header>
            <SidePage.Body>
              <div style={{ padding: 20 }}>Туловище</div>
            </SidePage.Body>
          </SidePage>
        )}
        <IgnoreLayerClick active={this.state.active}>
          <Button onClick={() => this.setState({ open: true })}>Open</Button>
        </IgnoreLayerClick>
        <Toggle
          checked={this.state.active}
          onChange={() =>
            this.setState(state => {
              return { active: !state.active };
            })
          }
        />
      </div>
    );
  }
}

storiesOf('IgnoreLayerClick', module).add('Common', () => <Sample />);
