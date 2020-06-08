import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonStyle from './style'

class ButtonComponent extends React.PureComponent {
  render() {
    const {type, className, variant, text, clickPlayMode } = this.props;
    return (
      <ButtonStyle className={className}>
        <Button variant={variant} className={type} onClick={clickPlayMode}>{text}</Button>
      </ButtonStyle>
    )
  }
}

export default ButtonComponent;